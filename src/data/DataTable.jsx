import React from 'react';

const th = (align) => ({
  textAlign: align || 'left', fontWeight: 'var(--weight-medium)', fontSize: 'var(--text-sm)',
  color: 'var(--ink-3)', padding: 'var(--pad-head)', borderBottom: 'var(--border-hair)',
  background: 'var(--zebra)', whiteSpace: 'nowrap'
});

const td = (o = {}) => ({
  padding: 'var(--pad-cell)', borderBottom: 'var(--border-hair-soft)',
  fontSize: o.mono ? '13px' : 'var(--text-base)', textAlign: o.align || 'left',
  color: o.mut ? 'var(--ink-2)' : 'var(--ink)',
  fontFamily: o.mono ? 'var(--mono)' : 'inherit',
  whiteSpace: o.align === 'right' ? 'nowrap' : 'normal'
});

// A cell is a { value, sub } descriptor only if it's a plain object that isn't a React element
// ($$typeof also catches elements from another React copy/version, where isValidElement returns false).
const isDescriptor = c => !!c && typeof c === 'object' && !Array.isArray(c) && !React.isValidElement(c) && !('$$typeof' in c) && ('value' in c || 'sub' in c);

const ICON_TONE = { ok: 'var(--ok)', warn: 'var(--warn)', alert: 'var(--alert)', bad: 'var(--alert)', mut: 'var(--ink-3)', info: 'var(--ink-2)' };

function Box({ state, onToggle, label, disabled, radio }) {
  const on = state === true, mixed = state === 'mixed';
  return (
    <label onClick={e => e.stopPropagation()} title={disabled ? 'No se puede seleccionar' : undefined} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 28, height: 28, margin: '-6px 0', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.4 : 1, position: 'relative', verticalAlign: 'middle' }}>
      <input type={radio ? 'radio' : 'checkbox'} aria-label={label} checked={on} disabled={disabled} aria-checked={mixed ? 'mixed' : on}
        ref={el => { if (el) el.indeterminate = mixed; }}
        onChange={e => !disabled && onToggle(e.nativeEvent.shiftKey)} onClick={e => { if (radio && on && !disabled) onToggle(false); }}
        style={{ position: 'absolute', opacity: 0, width: 1, height: 1, pointerEvents: 'none' }} />
      <span style={{
        width: 16, height: 16, borderRadius: radio ? '50%' : '3px', boxSizing: 'border-box',
        border: '1px solid ' + (on || mixed ? 'var(--chrome)' : 'var(--line)'),
        background: disabled ? 'var(--zebra)' : on || mixed ? 'var(--chrome)' : 'var(--card)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '12px'
      }}>{on ? (radio ? <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#fff' }} /> : <i className="ti ti-check" />) : mixed ? <i className="ti ti-minus" /> : null}</span>
    </label>
  );
}

export function DataTable({ columns, rows = [], onRowClick, footer, footerTotal, empty, selectable, selected = [], onSelectedChange, selectionMode = 'multiple', selectAll = true }) {
  const single = selectionMode === 'single';
  const [hover, setHover] = React.useState(-1);
  const last = React.useRef(-1);
  const keyOf = (r, i) => (r.id != null ? r.id : i);
  const keys = rows.map(keyOf);
  const isSel = (r, i) => selected.includes(keyOf(r, i));
  const canSel = r => r.selectable !== false;
  const selKeys = rows.filter(canSel).map(r => keyOf(r, rows.indexOf(r)));
  const nSel = selKeys.filter(k => selected.includes(k)).length;
  const allState = nSel === 0 ? false : nSel === selKeys.length ? true : 'mixed';
  const toggleAll = () => {
    const rest = selected.filter(k => !selKeys.includes(k));
    onSelectedChange && onSelectedChange(allState === true ? rest : [...rest, ...selKeys]);
  };
  const toggleRow = (i, shift) => {
    const k = keys[i], on = selected.includes(k);
    let next;
    if (single) next = on ? [] : [k];
    else if (shift && last.current >= 0 && last.current !== i) {
      const [a, b] = [Math.min(last.current, i), Math.max(last.current, i)];
      const range = rows.slice(a, b + 1).filter(canSel).map(r => keyOf(r, rows.indexOf(r)));
      next = on ? selected.filter(x => !range.includes(x)) : [...selected.filter(x => !range.includes(x)), ...range];
    } else next = on ? selected.filter(x => x !== k) : [...selected, k];
    last.current = i;
    onSelectedChange && onSelectedChange(next);
  };
  if (!rows.length && empty) return <div style={{ padding: '32px 16px', display: 'flex', justifyContent: 'center' }}>{empty}</div>;
  return (
    <div>
      <div style={{ overflowX: 'auto' }}>
        <table>
          <thead>
            <tr>
              {selectable ? <th style={{ ...th(), width: 1, paddingRight: 0 }}>{!single && selectAll && selKeys.length ? <Box state={allState} onToggle={toggleAll} label="Seleccionar todas" /> : null}</th> : null}
              {columns.map((c, i) => <th key={i} style={th(c.align)}>{c.label}</th>)}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={keyOf(r, i)} aria-selected={selectable ? isSel(r, i) : undefined}
                onClick={onRowClick ? () => onRowClick(r, i) : undefined}
                onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(-1)}
                style={{
                  cursor: onRowClick ? 'pointer' : 'default',
                  background: selectable && isSel(r, i) ? 'var(--mut-bg)' : hover === i && onRowClick ? 'var(--zebra)' : 'transparent'
                }}>
                {selectable ? <td style={{ ...td(), width: 1, paddingRight: 0 }}><Box state={isSel(r, i)} radio={single} disabled={!canSel(r)} onToggle={shift => toggleRow(i, shift)} label="Seleccionar fila" /></td> : null}
                {r.cells.map((cell, j) => {
                  const col = columns[j] || {};
                  const v = isDescriptor(cell) ? cell : { value: cell };
                  const ic = col.icon ? (typeof col.icon === 'function' ? col.icon(r) : col.icon) : null;
                  const icon = ic ? <i className={'ti ' + ic} aria-hidden="true" style={{ fontSize: '17px', flex: 'none', color: ICON_TONE[r.tone] || ICON_TONE.mut, marginTop: (v.value != null && v.value !== '') ? '1px' : 0 }} /> : null;
                  const hasVal = v.value != null && v.value !== '';
                  return (
                    <td key={j} style={{ ...td({ align: col.align, mono: col.mono, mut: col.muted }), ...(ic && !hasVal ? { width: 1, paddingRight: 0 } : {}) }}>
                      {icon && hasVal ? (
                        <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', justifyContent: col.align === 'right' ? 'flex-end' : 'flex-start' }}>
                          {icon}<div style={{ minWidth: 0 }}>{v.value}{v.sub ? <div style={{ fontSize: '12px', color: 'var(--ink-3)' }}>{v.sub}</div> : null}</div>
                        </div>
                      ) : icon ? <span style={{ display: 'inline-flex', verticalAlign: 'middle' }}>{icon}</span> : (<>
                        {v.value}
                        {v.sub ? <div style={{ fontSize: '12px', color: 'var(--ink-3)' }}>{v.sub}</div> : null}
                      </>)}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {(footer || footerTotal) ? (
        <div style={{
          display: 'flex', gap: '12px', alignItems: 'baseline', padding: '10px 14px',
          fontSize: 'var(--text-sm)', color: 'var(--ink-3)', background: 'var(--zebra)',
          borderTop: 'var(--border-hair)'
        }}>
          <span>{footer}</span>
          <span style={{ marginLeft: 'auto', fontFamily: 'var(--mono)' }}>{footerTotal}</span>
        </div>
      ) : null}
    </div>
  );
}

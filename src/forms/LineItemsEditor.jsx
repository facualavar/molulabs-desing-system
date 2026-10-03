import React from 'react';
import { NumberInput } from './NumberInput.jsx';
import { Autocomplete } from './Autocomplete.jsx';
import { IconButton } from '../core/IconButton.jsx';

const num = v => { const n = parseFloat(String(v == null ? '' : v).replace(/\./g, '').replace(',', '.')); return isNaN(n) ? 0 : n; };
const money = (n, cur) => cur + ' ' + n.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const qtyFmt = n => n.toLocaleString('es-AR', { maximumFractionDigits: 3 });
const keyOf = l => String(l.id != null ? l.id : l.label);

export function LineItemsEditor({ lines = [], onChange, catalog = [], showPrice = true, showTotal = true, currency = '$', addPlaceholder = 'Agregar producto del catálogo', emptyLabel = 'Sin productos en el catálogo', disabled, style }) {
  const [q, setQ] = React.useState('');
  const set = (i, patch) => onChange && onChange(lines.map((l, j) => (j === i ? { ...l, ...patch } : l)));
  const remove = i => onChange && onChange(lines.filter((_, j) => j !== i));
  const used = lines.map(keyOf);
  const avail = catalog.filter(c => !used.includes(keyOf(c))).map(c => ({ ...c, meta: c.meta || c.sub }));
  const add = it => {
    const { meta, ...c } = it;
    onChange && onChange([...lines, { ...c, qty: c.qty != null ? c.qty : '1', price: c.price != null ? String(c.price) : '' }]);
    setQ('');
  };
  const cols = showPrice ? 'minmax(180px, 1fr) 150px 150px 120px 36px' : 'minmax(180px, 1fr) 170px 36px';
  const total = lines.reduce((s, l) => s + num(l.qty) * num(l.price), 0);
  const head = { fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)', color: 'var(--ink-3)', whiteSpace: 'nowrap' };
  const grid = { display: 'grid', gridTemplateColumns: cols, gap: '10px', alignItems: 'start', padding: '0 14px' };
  return (
    <div style={{ ...style }}>
      <div style={{ overflowX: 'auto' }}>
        <div style={{ minWidth: showPrice ? 680 : 420 }}>
          <div style={{ ...grid, padding: 'var(--pad-head)', paddingLeft: 14, paddingRight: 14, background: 'var(--zebra)', borderBottom: 'var(--border-hair)' }}>
            <span style={head}>Producto</span>
            <span style={{ ...head, textAlign: 'right' }}>Cantidad</span>
            {showPrice ? <span style={{ ...head, textAlign: 'right' }}>Precio unit.</span> : null}
            {showPrice ? <span style={{ ...head, textAlign: 'right' }}>Subtotal</span> : null}
            <span></span>
          </div>
          {lines.length ? lines.map((l, i) => {
            const over = l.max != null && num(l.qty) > l.max;
            const hint = l.max != null ? (over ? 'Supera el stock (' + qtyFmt(l.max) + ')' : 'Stock: ' + qtyFmt(l.max)) : null;
            return (
              <div key={keyOf(l)} style={{ ...grid, paddingTop: 10, paddingBottom: 10, borderBottom: 'var(--border-hair-soft)' }}>
                <div style={{ minWidth: 0, paddingTop: 7 }}>
                  <div style={{ fontSize: 'var(--text-base)', color: 'var(--ink)' }}>{l.label}</div>
                  {l.sub ? <div style={{ fontSize: '12px', color: 'var(--ink-3)' }}>{l.sub}</div> : null}
                </div>
                <div>
                  <NumberInput value={l.qty} onChange={v => set(i, { qty: v })} unit={l.unit} invalid={over} disabled={disabled} />
                  {hint ? <div style={{ fontSize: '12px', marginTop: 3, textAlign: 'right', color: over ? 'var(--alert)' : 'var(--ink-3)' }}>{hint}</div> : null}
                </div>
                {showPrice ? <NumberInput value={l.price} onChange={v => set(i, { price: v })} prefix={currency} disabled={disabled} /> : null}
                {showPrice ? <div style={{ paddingTop: 7, textAlign: 'right', fontFamily: 'var(--mono)', fontSize: '13px', color: 'var(--ink)', whiteSpace: 'nowrap' }}>{money(num(l.qty) * num(l.price), currency)}</div> : null}
                <div style={{ paddingTop: 3 }}>{!disabled ? <IconButton icon="ti-trash" label={'Quitar ' + l.label} onClick={() => remove(i)} /> : null}</div>
              </div>
            );
          }) : (
            <div style={{ padding: '18px 14px', fontSize: 'var(--text-base)', color: 'var(--ink-3)', borderBottom: 'var(--border-hair-soft)' }}>Todavía no hay renglones. Agregá productos desde el catálogo.</div>
          )}
        </div>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px 16px', padding: '10px 14px', background: 'var(--zebra)' }}>
        {!disabled ? <Autocomplete value={q} onChange={setQ} onSelect={add} items={avail} placeholder={addPlaceholder} icon="ti-plus" emptyLabel={emptyLabel} style={{ flex: '1 1 260px', maxWidth: 420 }} /> : null}
        <span style={{ marginLeft: 'auto', display: 'flex', gap: 14, alignItems: 'baseline', fontSize: 'var(--text-sm)', color: 'var(--ink-3)' }}>
          <span>{lines.length} {lines.length === 1 ? 'renglón' : 'renglones'}</span>
          {showPrice && showTotal ? <span style={{ fontFamily: 'var(--mono)', fontSize: '14px', fontWeight: 600, color: 'var(--ink)' }}>{money(total, currency)}</span> : null}
        </span>
      </div>
    </div>
  );
}

import React from 'react';

export function MultiChoice({ value = [], onChange, options = [], name, min = 180, disabled, invalid, max, variant = 'tiles', style }) {
  const opts = options.map(o => (typeof o === 'object' ? o : { value: o, label: o }));
  const sel = Array.isArray(value) ? value : [];
  const full = max != null && sel.length >= max;
  const toggle = o => {
    if (disabled) return;
    const on = sel.includes(o.value);
    let next;
    if (on) next = sel.filter(v => v !== o.value);
    else if (o.exclusive) next = [o.value];
    else {
      if (full) return;
      const excl = opts.filter(x => x.exclusive).map(x => x.value);
      next = [...sel.filter(v => !excl.includes(v)), o.value];
    }
    onChange && onChange(next);
  };
  if (variant === 'list') {
    const main = opts.filter(o => !o.exclusive), ex = opts.filter(o => o.exclusive);
    const row = (o, i, first) => {
      const on = sel.includes(o.value);
      const off = disabled || (!on && full && !o.exclusive);
      return (
        <label key={String(o.value)} style={{
          position: 'relative', display: 'flex', gap: '11px', alignItems: 'center',
          minHeight: 'var(--tap-min)', boxSizing: 'border-box', padding: '8px 12px',
          borderTop: first ? 'none' : 'var(--border-hair-soft)',
          background: on ? 'var(--mut-bg)' : 'transparent',
          cursor: off ? 'not-allowed' : 'pointer', opacity: off && !disabled ? 0.5 : 1,
          transition: 'background var(--dur-fast)'
        }}>
          <input type="checkbox" name={name} value={String(o.value)} checked={on} disabled={off}
            onChange={() => toggle(o)}
            style={{ position: 'absolute', opacity: 0, width: 1, height: 1, pointerEvents: 'none' }} />
          <span style={{
            width: 16, height: 16, flex: 'none', borderRadius: o.exclusive ? 'var(--r-round)' : '3px',
            border: '1px solid ' + (on ? 'var(--chrome)' : 'var(--line)'), background: on ? 'var(--chrome)' : 'var(--card)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '12px'
          }}>{on ? <i className="ti ti-check" /> : null}</span>
          <span style={{ flex: 1, minWidth: 0, fontSize: 'var(--ui-text)', color: o.exclusive && !on ? 'var(--ink-2)' : 'var(--ink)', fontWeight: on ? 500 : 400 }}>{o.label}</span>
          {o.hint ? <span style={{ fontSize: 'var(--ui-text-sm)', color: 'var(--ink-3)', textAlign: 'right' }}>{o.hint}</span> : null}
        </label>
      );
    };
    return (
      <div role="group" style={{ display: 'flex', flexDirection: 'column', opacity: disabled ? 0.45 : 1, ...style }}>
        <div style={{
          border: '1px solid ' + (invalid ? 'var(--alert)' : 'var(--line)'), borderRadius: 'var(--r)',
          background: 'var(--card)', overflow: 'hidden'
        }}>
          {main.map((o, i) => row(o, i, i === 0))}
          {ex.length ? <div style={{ borderTop: '1px solid var(--line)', background: 'var(--page)' }}>{ex.map((o, i) => row(o, i, i === 0))}</div> : null}
        </div>
        <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--ink-3)', padding: '5px 2px 0' }}>
          {sel.length ? (ex.some(o => sel.includes(o.value)) ? ex.find(o => sel.includes(o.value)).label : sel.length + ' de ' + main.length + ' seleccionadas') : 'Ninguna seleccionada'}{max != null ? ' · máx. ' + max : ''}
        </div>
      </div>
    );
  }
  if (variant === 'buttons') {
    const main = opts.filter(o => !o.exclusive), ex = opts.filter(o => o.exclusive);
    const btn = (o, i) => {
      const on = sel.includes(o.value);
      const off = disabled || (!on && full && !o.exclusive);
      return (
        <label key={String(o.value)} title={typeof o.hint === 'string' ? o.hint : undefined} style={{
          position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
          minWidth: 56, minHeight: 'var(--tap-min)', boxSizing: 'border-box', padding: '0 14px', whiteSpace: 'nowrap',
          fontSize: 'var(--ui-text-sm)', fontWeight: on ? 500 : 400,
          color: on ? '#fff' : 'var(--ink-2)', background: on ? 'var(--chrome)' : 'transparent',
          borderLeft: i ? '1px solid ' + (on || sel.includes((main[i - 1] || {}).value) ? 'var(--chrome)' : 'var(--line)') : 'none',
          cursor: off ? 'not-allowed' : 'pointer', opacity: off && !disabled ? 0.5 : 1,
          transition: 'background var(--dur-fast), color var(--dur-fast)'
        }}>
          <input type="checkbox" name={name} value={String(o.value)} checked={on} disabled={off}
            onChange={() => toggle(o)}
            style={{ position: 'absolute', opacity: 0, width: 1, height: 1, pointerEvents: 'none' }} />
          {on ? <i className="ti ti-check" style={{ fontSize: '14px' }} /> : null}
          {o.label}
        </label>
      );
    };
    const group = { display: 'inline-flex', border: '1px solid ' + (invalid ? 'var(--alert)' : 'var(--line)'), borderRadius: 'var(--r)', overflow: 'hidden', background: 'var(--card)', flex: 'none' };
    return (
      <div role="group" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center', opacity: disabled ? 0.45 : 1, ...style }}>
        <div style={{ maxWidth: '100%', overflowX: 'auto' }}><div style={group}>{main.map(btn)}</div></div>
        {ex.length ? <div style={group}>{ex.map((o, i) => btn(o, i))}</div> : null}
      </div>
    );
  }
  if (variant === 'chips') return (
    <div role="group" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', opacity: disabled ? 0.45 : 1, ...style }}>
      {opts.map(o => {
        const on = sel.includes(o.value);
        const off = disabled || (!on && full && !o.exclusive);
        return (
          <label key={String(o.value)} title={typeof o.hint === 'string' ? o.hint : undefined} style={{
            position: 'relative', display: 'inline-flex', alignItems: 'center', gap: '6px',
            minHeight: 'var(--tap-min)', boxSizing: 'border-box', padding: '0 14px',
            borderRadius: '999px', fontSize: 'var(--ui-text-sm)', fontWeight: on ? 500 : 400,
            border: '1px ' + (o.exclusive && !on ? 'dashed ' : 'solid ') + (on ? 'var(--chrome)' : invalid ? 'var(--alert)' : 'var(--line)'),
            background: on ? 'var(--chrome)' : 'var(--card)', color: on ? '#fff' : 'var(--ink-2)',
            cursor: off ? 'not-allowed' : 'pointer', opacity: off && !disabled ? 0.5 : 1,
            transition: 'background var(--dur-fast), color var(--dur-fast), border-color var(--dur-fast)'
          }}>
            <input type="checkbox" name={name} value={String(o.value)} checked={on} disabled={off}
              onChange={() => toggle(o)}
              style={{ position: 'absolute', opacity: 0, width: 1, height: 1, pointerEvents: 'none' }} />
            <i className={'ti ' + (on ? 'ti-check' : o.exclusive ? 'ti-minus' : 'ti-plus')} style={{ fontSize: '14px', color: on ? '#fff' : 'var(--ink-3)' }} />
            {o.label}
          </label>
        );
      })}
    </div>
  );
  return (
    <div role="group" style={{
      display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, ' + min + 'px), 1fr))',
      gap: '8px', opacity: disabled ? 0.45 : 1, ...style
    }}>
      {opts.map(o => {
        const on = sel.includes(o.value);
        const off = disabled || (!on && full && !o.exclusive);
        return (
          <label key={String(o.value)} style={{
            position: 'relative', display: 'flex', gap: '9px', alignItems: 'flex-start',
            minHeight: 'var(--tap-min)', boxSizing: 'border-box', padding: '9px 11px',
            border: '1px solid ' + (on ? 'var(--chrome)' : invalid ? 'var(--alert)' : 'var(--line)'),
            borderRadius: 'var(--r)', background: on ? 'var(--mut-bg)' : 'var(--card)',
            boxShadow: on ? 'inset 0 0 0 1px var(--chrome)' : 'none',
            cursor: off ? 'not-allowed' : 'pointer', opacity: off && !disabled ? 0.5 : 1,
            transition: 'border-color var(--dur-fast), background var(--dur-fast)'
          }}>
            <input type="checkbox" name={name} value={String(o.value)} checked={on} disabled={off}
              onChange={() => toggle(o)}
              style={{ position: 'absolute', opacity: 0, width: 1, height: 1, pointerEvents: 'none' }} />
            <span style={{
              width: 16, height: 16, flex: 'none', marginTop: '2px',
              borderRadius: o.exclusive ? 'var(--r-round)' : '3px',
              border: '1px solid ' + (on ? 'var(--chrome)' : 'var(--line)'),
              background: on ? 'var(--chrome)' : 'var(--card)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '12px'
            }}>{on ? <i className="ti ti-check" /> : null}</span>
            <span style={{ minWidth: 0 }}>
              <span style={{ display: 'block', fontSize: 'var(--ui-text)', color: 'var(--ink)', fontWeight: on ? 500 : 400 }}>{o.label}</span>
              {o.hint ? <span style={{ display: 'block', fontSize: 'var(--ui-text-sm)', color: 'var(--ink-3)' }}>{o.hint}</span> : null}
            </span>
          </label>
        );
      })}
    </div>
  );
}

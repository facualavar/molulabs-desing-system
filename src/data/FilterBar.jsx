import React from 'react';

export function FilterBar({ filters, value, onChange, actions, style }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center', ...style }}>
      {filters.map((f, i) => {
        const on = (value ?? 0) === i;
        return (
          <button key={i} onClick={() => onChange && onChange(i, f)} style={{
            fontSize: 'var(--text-base)', padding: '6px 12px', borderRadius: 'var(--r)', cursor: 'pointer',
            border: '1px solid ' + (on ? 'var(--chrome)' : 'var(--line)'),
            background: on ? 'var(--chrome)' : 'var(--card)',
            color: on ? '#fff' : 'var(--ink-2)'
          }}>{f}</button>
        );
      })}
      {actions ? <div style={{ marginLeft: 'auto', display: 'flex', gap: '10px' }}>{actions}</div> : null}
    </div>
  );
}

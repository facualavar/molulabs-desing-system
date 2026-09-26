import React from 'react';

export function SegmentedControl({ value, onChange, options = ['Sí', 'No'], name, disabled, invalid, style }) {
  const opts = options.map(o => (typeof o === 'object' ? o : { value: o, label: o }));
  return (
    <div role="radiogroup" style={{
      display: 'inline-flex', alignSelf: 'flex-start', width: 'fit-content',
      border: '1px solid ' + (invalid ? 'var(--alert)' : 'var(--line)'), borderRadius: 'var(--r)',
      overflow: 'hidden', background: 'var(--card)', opacity: disabled ? 0.45 : 1, ...style
    }}>
      {opts.map((o, i) => {
        const on = value === o.value;
        return (
          <label key={String(o.value)} style={{
            position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            minWidth: 56, minHeight: 'var(--tap-min)', boxSizing: 'border-box', padding: '0 12px',
            fontSize: 'var(--ui-text-sm)', fontWeight: on ? 500 : 400,
            color: on ? '#fff' : 'var(--ink-2)', background: on ? 'var(--chrome)' : 'transparent',
            borderLeft: i ? '1px solid var(--line)' : 'none',
            cursor: disabled ? 'default' : 'pointer',
            transition: 'background var(--dur-fast), color var(--dur-fast)'
          }}>
            <input type="radio" name={name} value={String(o.value)} checked={on} disabled={disabled}
              onChange={() => onChange && onChange(o.value)}
              style={{ position: 'absolute', opacity: 0, width: 1, height: 1, pointerEvents: 'none' }} />
            {o.label}
          </label>
        );
      })}
    </div>
  );
}

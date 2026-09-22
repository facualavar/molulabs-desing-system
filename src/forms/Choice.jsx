import React from 'react';

export function Checkbox({ checked, onChange, label, hint, disabled, style }) {
  return (
    <label style={{
      display: 'flex', gap: '9px', alignItems: 'flex-start', cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1, ...style
    }}>
      <span style={{
        width: 16, height: 16, flex: 'none', marginTop: '2px', borderRadius: '3px',
        border: '1px solid ' + (checked ? 'var(--chrome)' : 'var(--line)'),
        background: checked ? 'var(--chrome)' : 'var(--card)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '12px'
      }}>{checked ? <i className="ti ti-check" /> : null}</span>
      <input type="checkbox" checked={!!checked} disabled={disabled}
        onChange={e => onChange && onChange(e.target.checked)}
        style={{ position: 'absolute', opacity: 0, width: 1, height: 1 }} />
      <span style={{ minWidth: 0 }}>
        <span style={{ display: 'block', fontSize: 'var(--ui-text)' }}>{label}</span>
        {hint ? <span style={{ display: 'block', fontSize: 'var(--ui-text-sm)', color: 'var(--ink-3)' }}>{hint}</span> : null}
      </span>
    </label>
  );
}

export function RadioGroup({ value, onChange, options = [], name, style }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', ...style }}>
      {options.map(o => {
        const opt = typeof o === 'string' ? { value: o, label: o } : o;
        const on = value === opt.value;
        return (
          <label key={opt.value} style={{ display: 'flex', gap: '9px', alignItems: 'flex-start', cursor: 'pointer' }}>
            <span style={{
              width: 16, height: 16, flex: 'none', marginTop: '2px', borderRadius: 'var(--r-round)',
              border: '1px solid ' + (on ? 'var(--chrome)' : 'var(--line)'), background: 'var(--card)',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              {on ? <span style={{ width: 8, height: 8, borderRadius: 'var(--r-round)', background: 'var(--chrome)' }} /> : null}
            </span>
            <input type="radio" name={name} checked={on} onChange={() => onChange && onChange(opt.value)}
              style={{ position: 'absolute', opacity: 0, width: 1, height: 1 }} />
            <span>
              <span style={{ display: 'block', fontSize: 'var(--ui-text)' }}>{opt.label}</span>
              {opt.hint ? <span style={{ display: 'block', fontSize: 'var(--ui-text-sm)', color: 'var(--ink-3)' }}>{opt.hint}</span> : null}
            </span>
          </label>
        );
      })}
    </div>
  );
}

export function Switch({ checked, onChange, label, hint, disabled, style }) {
  return (
    <label style={{
      display: 'flex', gap: '11px', alignItems: 'center', cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1, ...style
    }}>
      <span style={{
        width: 34, height: 20, flex: 'none', borderRadius: '10px', padding: '2px',
        background: checked ? 'var(--chrome)' : 'var(--mut-bg)',
        border: '1px solid ' + (checked ? 'var(--chrome)' : 'var(--line)'),
        display: 'flex', justifyContent: checked ? 'flex-end' : 'flex-start',
        transition: 'background var(--dur-fast)'
      }}>
        <span style={{ width: 14, height: 14, borderRadius: 'var(--r-round)', background: '#fff' }} />
      </span>
      <input type="checkbox" checked={!!checked} disabled={disabled}
        onChange={e => onChange && onChange(e.target.checked)}
        style={{ position: 'absolute', opacity: 0, width: 1, height: 1 }} />
      <span style={{ minWidth: 0 }}>
        <span style={{ display: 'block', fontSize: 'var(--ui-text)' }}>{label}</span>
        {hint ? <span style={{ display: 'block', fontSize: 'var(--ui-text-sm)', color: 'var(--ink-3)' }}>{hint}</span> : null}
      </span>
    </label>
  );
}

export function Choice({ type = 'checkbox', ...props }) {
  if (type === 'radio') return <RadioGroup {...props} />;
  if (type === 'switch') return <Switch {...props} />;
  return <Checkbox {...props} />;
}

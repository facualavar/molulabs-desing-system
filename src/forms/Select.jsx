import React from 'react';
import { controlStyle } from './Field.jsx';

export function Select({ value, onChange, options = [], placeholder, invalid, disabled, id, style }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <span style={{ position: 'relative', display: 'block' }}>
      <select id={id} value={value} disabled={disabled}
        onChange={e => onChange && onChange(e.target.value)}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{
          ...controlStyle({ invalid, disabled, focus }),
          appearance: 'none', paddingRight: '32px', cursor: disabled ? 'not-allowed' : 'pointer', ...style
        }}>
        {placeholder ? <option value="">{placeholder}</option> : null}
        {options.map(o => {
          const opt = typeof o === 'string' ? { value: o, label: o } : o;
          return <option key={opt.value} value={opt.value}>{opt.label}</option>;
        })}
      </select>
      <i className="ti ti-chevron-down" style={{
        position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)',
        fontSize: '16px', color: 'var(--ink-3)', pointerEvents: 'none'
      }} />
    </span>
  );
}

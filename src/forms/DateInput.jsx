import React from 'react';
import { controlStyle } from './Field.jsx';

export function DateInput({ value, onChange, invalid, disabled, id, style }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <span style={{ position: 'relative', display: 'block' }}>
      <input id={id} type="date" value={value} disabled={disabled}
        onChange={e => onChange && onChange(e.target.value)}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{ ...controlStyle({ invalid, disabled, mono: true, focus }), paddingRight: '32px', ...style }} />
      <i className="ti ti-calendar" style={{
        position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)',
        fontSize: '16px', color: 'var(--ink-3)', pointerEvents: 'none'
      }} />
    </span>
  );
}

export function DateRange({ from, to, onFrom, onTo, style }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', ...style }}>
      <DateInput value={from} onChange={onFrom} />
      <span style={{ fontSize: 'var(--ui-text)', color: 'var(--ink-3)', flex: 'none' }}>a</span>
      <DateInput value={to} onChange={onTo} />
    </div>
  );
}

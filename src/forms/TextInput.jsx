import React from 'react';
import { controlStyle } from './Field.jsx';

export function TextInput({ value, onChange, placeholder, mono, align, icon, invalid, disabled, id, type = 'text', style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const input = (
    <input id={id} type={type} value={value} disabled={disabled} placeholder={placeholder}
      onChange={e => onChange && onChange(e.target.value)}
      onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
      style={{
        ...controlStyle({ invalid, disabled, mono, align, focus }),
        ...(icon ? { paddingLeft: '32px' } : {}), ...style
      }} {...rest} />
  );
  if (!icon) return input;
  return (
    <span style={{ position: 'relative', display: 'block' }}>
      <i className={'ti ' + icon} style={{
        position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)',
        fontSize: '16px', color: 'var(--ink-3)', pointerEvents: 'none'
      }} />
      {input}
    </span>
  );
}

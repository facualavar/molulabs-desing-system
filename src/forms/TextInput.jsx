import React from 'react';
import { controlStyle } from './Field.jsx';

export function TextInput({ value, onChange, onFocus, onBlur, placeholder, mono, align, icon, invalid, disabled, id, type = 'text', style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const input = (
    <input {...rest} id={id} type={type} value={value} disabled={disabled} placeholder={placeholder}
      onChange={e => onChange && onChange(e.target.value, e)}
      onFocus={e => { setFocus(true); onFocus && onFocus(e); }}
      onBlur={e => { setFocus(false); onBlur && onBlur(e); }}
      style={{
        ...controlStyle({ invalid, disabled, mono, align, focus }),
        ...(icon ? { paddingLeft: '32px' } : {}), ...style
      }} />
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

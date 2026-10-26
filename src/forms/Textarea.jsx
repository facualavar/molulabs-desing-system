import React from 'react';
import { controlStyle } from './Field.jsx';

export function Textarea({ value, onChange, onFocus, onBlur, placeholder, rows = 3, invalid, disabled, id, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <textarea {...rest} id={id} rows={rows} value={value} disabled={disabled} placeholder={placeholder}
      onChange={e => onChange && onChange(e.target.value, e)}
      onFocus={e => { setFocus(true); onFocus && onFocus(e); }}
      onBlur={e => { setFocus(false); onBlur && onBlur(e); }}
      style={{ ...controlStyle({ invalid, disabled, focus }), resize: 'vertical', ...style }} />
  );
}

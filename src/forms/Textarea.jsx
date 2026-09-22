import React from 'react';
import { controlStyle } from './Field.jsx';

export function Textarea({ value, onChange, placeholder, rows = 3, invalid, disabled, id, style }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <textarea id={id} rows={rows} value={value} disabled={disabled} placeholder={placeholder}
      onChange={e => onChange && onChange(e.target.value)}
      onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
      style={{ ...controlStyle({ invalid, disabled, focus }), resize: 'vertical', ...style }} />
  );
}

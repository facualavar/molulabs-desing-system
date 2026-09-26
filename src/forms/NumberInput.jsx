import React from 'react';
import { controlStyle } from './Field.jsx';

export function NumberInput({ value, onChange, unit, prefix, invalid, disabled, readOnly, name, id, step, style }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <span style={{ position: 'relative', display: 'block' }}>
      {prefix ? (
        <span style={{
          position: 'absolute', left: '11px', top: '50%', transform: 'translateY(-50%)',
          fontFamily: 'var(--mono)', fontSize: '13px', color: 'var(--ink-3)', pointerEvents: 'none'
        }}>{prefix}</span>
      ) : null}
      <input id={id} inputMode="decimal" step={step} value={value} disabled={disabled} readOnly={readOnly} name={name} aria-readonly={readOnly || undefined} tabIndex={readOnly ? -1 : undefined}
        onChange={e => !readOnly && onChange && onChange(e.target.value)}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{
          ...controlStyle({ invalid, disabled, readOnly, mono: true, align: 'right', focus }),
          ...(unit ? { paddingRight: '46px' } : {}), ...(prefix ? { paddingLeft: '28px' } : {}), ...style
        }} />
      {unit ? (
        <span style={{
          position: 'absolute', right: '11px', top: '50%', transform: 'translateY(-50%)',
          fontSize: 'var(--text-sm)', color: 'var(--ink-3)', pointerEvents: 'none'
        }}>{unit}</span>
      ) : null}
    </span>
  );
}

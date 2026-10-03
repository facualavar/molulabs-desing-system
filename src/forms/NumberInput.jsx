import React from 'react';
import { controlStyle } from './Field.jsx';

export function NumberInput({ value, onChange, unit, prefix, invalid, disabled, readOnly, name, id, step, style }) {
  const [focus, setFocus] = React.useState(false);
  const unitRef = React.useRef(null), preRef = React.useRef(null);
  const [w, setW] = React.useState({ unit: 0, pre: 0 });
  React.useLayoutEffect(() => {
    const m = () => setW({ unit: unitRef.current ? unitRef.current.offsetWidth : 0, pre: preRef.current ? preRef.current.offsetWidth : 0 });
    m();
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(m) : null;
    if (ro) { unitRef.current && ro.observe(unitRef.current); preRef.current && ro.observe(preRef.current); }
    return () => ro && ro.disconnect();
  }, [unit, prefix]);
  // edge 11px + affix + 8px gap; before measuring, estimate from character count
  const padR = unit ? (w.unit ? (19 + w.unit) + 'px' : 'calc(19px + ' + (String(unit).length + 0.5) + 'ch)') : null;
  const padL = prefix ? (w.pre ? (17 + w.pre) + 'px' : 'calc(17px + ' + (String(prefix).length + 0.5) + 'ch)') : null;
  return (
    <span style={{ position: 'relative', display: 'block' }}>
      {prefix ? (
        <span ref={preRef} style={{
          position: 'absolute', left: '11px', whiteSpace: 'nowrap', top: '50%', transform: 'translateY(-50%)',
          fontFamily: 'var(--mono)', fontSize: '13px', color: 'var(--ink-3)', pointerEvents: 'none'
        }}>{prefix}</span>
      ) : null}
      <input id={id} inputMode="decimal" step={step} value={value} disabled={disabled} readOnly={readOnly} name={name} aria-readonly={readOnly || undefined} tabIndex={readOnly ? -1 : undefined}
        onChange={e => !readOnly && onChange && onChange(e.target.value)}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{
          ...controlStyle({ invalid, disabled, readOnly, mono: true, align: 'right', focus }),
          ...(padR ? { paddingRight: padR } : {}), ...(padL ? { paddingLeft: padL } : {}), ...style
        }} />
      {unit ? (
        <span ref={unitRef} style={{
          position: 'absolute', right: '11px', whiteSpace: 'nowrap', top: '50%', transform: 'translateY(-50%)',
          fontSize: 'var(--text-sm)', color: 'var(--ink-3)', pointerEvents: 'none'
        }}>{unit}</span>
      ) : null}
    </span>
  );
}

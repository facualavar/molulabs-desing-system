import React from 'react';

/** Fill for a large area: the chart ramp, not the text colour. See the --warn-2 note in colors.css. */
function fillOf(tone) {
  if (!tone) return 'var(--chrome)';
  if (tone === 'warn') return 'var(--warn-2)';
  if (tone === 'mut') return 'var(--mut-2)';
  return 'var(--' + tone + ')';
}

/** Donut over state segments, with the total in the middle. Four segments is the ceiling. */
export function DonutChart({ segments = [], total, totalLabel, size = 112, thickness = 14, gap = 1.1, style, ...rest }) {
  const sum = segments.reduce((a, s) => a + s.value, 0) || 1;
  const g = segments.length > 1 ? gap : 0;
  let at = 0;
  const parts = [];
  segments.forEach((s, i) => {
    const from = (at / sum) * 100;
    at += s.value;
    const to = (at / sum) * 100;
    const c = fillOf(s.tone);
    const end = Math.max(to - g, from);
    parts.push(c + ' ' + from.toFixed(2) + '% ' + end.toFixed(2) + '%');
    if (g && i < segments.length - 1) parts.push('var(--card) ' + end.toFixed(2) + '% ' + to.toFixed(2) + '%');
  });
  const stops = parts.join(', ');
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '18px', minWidth: 0, ...style }} {...rest}>
      <div style={{
        width: size + 'px', height: size + 'px', flex: 'none', borderRadius: 'var(--r-round)',
        background: 'conic-gradient(' + stops + ')',
        display: 'grid', placeItems: 'center',
        mask: 'radial-gradient(circle, transparent calc(50% - ' + thickness + 'px), #000 calc(50% - ' + thickness + 'px))',
        WebkitMask: 'radial-gradient(circle, transparent calc(50% - ' + thickness + 'px), #000 calc(50% - ' + thickness + 'px))'
      }} />
      <div style={{ minWidth: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {total !== undefined ? (
          <div style={{ marginBottom: '4px' }}>
            <div style={{
              fontFamily: 'var(--mono)', fontSize: 'var(--ui-title)', fontVariantNumeric: 'tabular-nums',
              letterSpacing: '-.02em', lineHeight: 1.1
            }}>{total}</div>
            {totalLabel ? <div style={{ fontSize: 'var(--ui-text-sm)', color: 'var(--ink-3)', marginTop: '2px' }}>{totalLabel}</div> : null}
          </div>
        ) : null}
        {segments.map((s, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '9px', fontSize: 'var(--ui-text)' }}>
            <span style={{
              width: '9px', height: '9px', flex: 'none', borderRadius: '2px',
              background: fillOf(s.tone)
            }} />
            <span style={{
              color: 'var(--ink-2)', flex: 1, minWidth: 0, whiteSpace: 'nowrap',
              overflow: 'hidden', textOverflow: 'ellipsis'
            }}>{s.label}</span>
            <span style={{
              fontFamily: 'var(--mono)', fontVariantNumeric: 'tabular-nums', color: 'var(--ink)', flex: 'none'
            }}>{s.display || s.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

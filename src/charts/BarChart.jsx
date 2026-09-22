import React from 'react';

/** Horizontal bars — label, track, figure. A summary above the table, never instead of it. */
export function BarChart({ items = [], max, tone = 'chrome', showTrack = true, labelMax = '26ch', style, ...rest }) {
  const top = max || Math.max(...items.map(i => i.value), 0) || 1;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', ...style }} {...rest}>
      {items.map((it, i) => {
        const pct = Math.max((it.value / top) * 100, it.value > 0 ? 1.5 : 0);
        const color = it.tone ? 'var(--' + it.tone + ')' : tone === 'leather' ? 'var(--leather)' : 'var(--chrome)';
        return (
          <div key={i} style={{
            display: 'grid', gridTemplateColumns: 'minmax(0, max-content) minmax(72px, 1fr) auto',
            alignItems: 'center', gap: '12px', minHeight: 'var(--row-h)',
            borderTop: i === 0 ? 'none' : 'var(--border-hair-soft)'
          }}>
            <span style={{
              fontSize: 'var(--ui-text)', color: 'var(--ink-2)', maxWidth: labelMax,
              overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'
            }}>{it.label}</span>
            <span style={{
              height: '10px', borderRadius: 'var(--r-sm)',
              background: showTrack ? 'var(--page)' : 'transparent', overflow: 'hidden', display: 'block'
            }}>
              <span style={{
                display: 'block', width: pct + '%', height: '100%',
                background: color, borderRadius: 'var(--r-sm)',
                transition: 'width var(--dur) var(--ease)'
              }} />
            </span>
            <span style={{
              fontFamily: 'var(--mono)', fontSize: 'var(--ui-text)', fontVariantNumeric: 'tabular-nums',
              textAlign: 'right', whiteSpace: 'nowrap'
            }}>{it.display || it.value}</span>
          </div>
        );
      })}
    </div>
  );
}

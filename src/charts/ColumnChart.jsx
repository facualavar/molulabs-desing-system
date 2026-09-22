import React from 'react';

/** Nice ceiling + step for the Y axis: 1, 2, 2.5 or 5 × a power of ten. */
function niceScale(max, ticks) {
  if (!(max > 0)) return { top: 1, step: 1 };
  const raw = max / ticks;
  const mag = Math.pow(10, Math.floor(Math.log10(raw)));
  const norm = raw / mag;
  const mult = norm <= 1 ? 1 : norm <= 2 ? 2 : norm <= 2.5 ? 2.5 : norm <= 5 ? 5 : 10;
  const step = mult * mag;
  return { top: Math.ceil(max / step) * step, step };
}

/**
 * Vertical columns with X and Y axes — the time-series variant. Use it when the X axis is
 * ordered (months, weeks, aging buckets); use BarChart when it is a ranking of names.
 */
export function ColumnChart({
  items = [], max, ticks = 4, height = 168, tone = 'chrome',
  formatY = v => v, style, ...rest
}) {
  const peak = max || Math.max(...items.map(i => i.value), 0);
  const { top, step } = niceScale(peak, ticks);
  const lines = [];
  for (let v = top; v >= 0; v -= step) lines.push(v);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0, ...style }} {...rest}>
      <div style={{ display: 'flex', gap: '10px', minWidth: 0 }}>
        {/* Y axis */}
        <div style={{
          height: height + 'px', flex: 'none', display: 'flex', flexDirection: 'column',
          justifyContent: 'space-between', alignItems: 'flex-end'
        }}>
          {lines.map((v, i) => (
            <span key={i} style={{
              fontFamily: 'var(--mono)', fontSize: 'var(--text-xs)', color: 'var(--ink-3)',
              fontVariantNumeric: 'tabular-nums', lineHeight: 1, transform: 'translateY(-50%)'
            }}>{formatY(v)}</span>
          ))}
        </div>
        {/* Plot */}
        <div style={{ flex: 1, minWidth: 0, position: 'relative', height: height + 'px', borderLeft: 'var(--border-hair)' }}>
          {lines.map((v, i) => (
            <span key={i} style={{
              position: 'absolute', left: 0, right: 0, top: ((top - v) / top * 100) + '%',
              borderTop: v === 0 ? '1px solid var(--line)' : 'var(--border-hair-soft)'
            }} />
          ))}
          <div style={{
            position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end',
            justifyContent: 'space-evenly', gap: '6px', padding: '0 6px'
          }}>
            {items.map((it, i) => {
              const pct = Math.max((it.value / top) * 100, it.value > 0 ? 1 : 0);
              const color = it.tone ? 'var(--' + it.tone + ')' : tone === 'leather' ? 'var(--leather)' : 'var(--chrome)';
              return (
                <span key={i} title={it.label + ': ' + (it.display || it.value)} style={{
                  flex: 1, minWidth: 0, height: pct + '%', maxWidth: '56px',
                  background: color, borderRadius: 'var(--r-sm) var(--r-sm) 0 0',
                  transition: 'height var(--dur) var(--ease)'
                }} />
              );
            })}
          </div>
        </div>
      </div>
      {/* X axis */}
      <div style={{ display: 'flex', gap: '10px', minWidth: 0, marginTop: '7px' }}>
        <span style={{ flex: 'none', visibility: 'hidden' }}>
          <span style={{ fontFamily: 'var(--mono)', fontSize: 'var(--text-xs)' }}>{formatY(top)}</span>
        </span>
        <div style={{ flex: 1, minWidth: 0, display: 'flex', justifyContent: 'space-evenly', gap: '6px', padding: '0 6px' }}>
          {items.map((it, i) => (
            <span key={i} style={{
              flex: 1, minWidth: 0, maxWidth: '56px', textAlign: 'center',
              fontSize: 'var(--text-xs)', color: 'var(--ink-3)',
              overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'
            }}>{it.label}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

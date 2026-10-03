import React from 'react';

const TONES = { default: 'var(--chrome)', ok: 'var(--ok)', warn: 'var(--warn-2)', alert: 'var(--alert)' };
const PIN = 'M12 1C5.9 1 1 5.8 1 11.8c0 7.6 9.2 17.7 10.2 18.8.4.5 1.2.5 1.6 0C13.8 29.5 23 19.4 23 11.8 23 5.8 18.1 1 12 1z';
const SHADOW = 'drop-shadow(0 1px 1.5px rgba(0,0,0,.45))';

export function MapMarker({ tone = 'default', selected = false, label, count, style }) {
  const a11y = { role: 'img', 'aria-label': label, title: label };
  if (count != null) {
    const d = count > 99 ? 40 : count > 9 ? 34 : 30;
    return (
      <div {...a11y} style={{
        width: d, height: d, boxSizing: 'border-box', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'var(--chrome)', border: '2px solid #fff', color: '#fff', filter: SHADOW,
        fontFamily: 'var(--mono)', fontSize: 'var(--text-sm)', fontWeight: 600, lineHeight: 1, ...style
      }}>{count}</div>
    );
  }
  const w = selected ? 34 : 26, h = Math.round(w * 34 / 29);
  const fill = selected ? 'var(--leather)' : TONES[tone] || TONES.default;
  return (
    <div {...a11y} style={{ width: w, height: h, lineHeight: 0, filter: SHADOW, ...style }}>
      <svg viewBox="-2.5 -2.5 29 34" width={w} height={h} style={{ display: 'block', overflow: 'visible' }} aria-hidden="true" focusable="false">
        {selected ? <path d={PIN} fill="#fff" stroke="#fff" strokeWidth="4.5" strokeLinejoin="round" /> : null}
        <path d={PIN} fill={fill} stroke="#fff" strokeWidth={selected ? 0 : 1.6} strokeLinejoin="round" />
        <circle cx="12" cy="11.6" r={selected ? 4.4 : 3.8} fill="#fff" />
      </svg>
    </div>
  );
}

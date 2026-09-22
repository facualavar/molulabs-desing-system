import React from 'react';

const tones = {
  ok:    ['var(--ok-bg)', 'var(--ok)'],
  warn:  ['var(--warn-bg)', 'var(--warn)'],
  bad:   ['var(--alert-bg)', 'var(--alert)'],
  mut:   ['var(--mut-bg)', 'var(--ink-2)']
};

export function Tag({ tone = 'mut', children, style }) {
  const [bg, fg] = tones[tone] || tones.mut;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', fontSize: 'var(--text-pill)',
      padding: '2px 8px', borderRadius: 'var(--r-pill)', background: bg, color: fg,
      whiteSpace: 'nowrap', ...style
    }}>{children}</span>
  );
}

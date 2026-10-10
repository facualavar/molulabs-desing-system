import React from 'react';

/** Row of capability cards under a Section header — 2 to 4 per row. */
export function FeatureGrid({ items = [], columns = 3, tone = 'card', style, ...rest }) {
  const dark = tone === 'chrome';
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: '16px', ...style
    }} {...rest}>
      {items.map((it, i) => (
        <article key={i} style={{
          background: dark ? 'var(--chrome-2)' : 'var(--card)',
          border: dark ? '1px solid var(--chrome-line)' : 'var(--border-hair)',
          borderRadius: 'var(--r)', padding: '24px 22px',
          color: dark ? '#fff' : 'var(--ink)'
        }}>
          {it.icon ? <i className={'ti ' + it.icon} style={{
            fontSize: '26px', color: dark ? 'var(--leather-2)' : 'var(--leather)', display: 'block', marginBottom: '16px'
          }} /> : null}
          <h3 style={{
            margin: 0, fontSize: 'var(--ui-text-lg)', lineHeight: 1.3,
            fontWeight: 'var(--weight-semibold)', letterSpacing: 'var(--tracking-title)'
          }}>{it.title}</h3>
          <p style={{
            margin: '10px 0 0', fontSize: 'var(--ui-text)', lineHeight: 1.6,
            color: dark ? 'var(--chrome-ink)' : 'var(--ink-2)'
          }}>{it.body}</p>
          {it.meta ? <div style={{
            marginTop: '16px', fontFamily: 'var(--mono)', fontSize: 'var(--ui-text-sm)',
            color: dark ? 'var(--chrome-mut)' : 'var(--ink-3)'
          }}>{it.meta}</div> : null}
        </article>
      ))}
    </div>
  );
}

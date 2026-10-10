import React from 'react';

const grounds = {
  paper: { background: 'var(--page)', color: 'var(--ink)' },
  card:  { background: 'var(--card)', color: 'var(--ink)' },
  chrome:{ background: 'var(--chrome)', color: '#fff' },
  ok:    { background: 'var(--ok-bg)', color: 'var(--ok-ink)' },
  warn:  { background: 'var(--warn-bg)', color: 'var(--warn-ink)' }
};

/** A full-bleed landing band: coloured ground, contained content, section rhythm. */
export function Section({ tone = 'paper', eyebrow, title, lead, actions, align = 'left', children, style, ...rest }) {
  const g = grounds[tone] || grounds.paper;
  const dark = tone === 'chrome';
  const center = align === 'center';
  return (
    <section style={{ ...g, padding: 'var(--pad-screen)', ...style }} {...rest}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
        {(eyebrow || title || lead) ? (
          <header style={{
            maxWidth: center ? 'var(--measure)' : 'none',
            margin: center ? '0 auto' : 0, textAlign: center ? 'center' : 'left',
            marginBottom: '40px'
          }}>
            {eyebrow ? <div style={{
              fontFamily: 'var(--mono)', fontSize: 'var(--ui-text-sm)', textTransform: 'uppercase',
              letterSpacing: '.09em', color: dark ? 'var(--leather-2)' : 'var(--leather)', marginBottom: '14px'
            }}>{eyebrow}</div> : null}
            {title ? <h2 style={{
              margin: 0, fontSize: 'var(--ui-title)', lineHeight: 1.15, letterSpacing: '-.02em',
              fontWeight: 'var(--weight-semibold)', textWrap: 'pretty'
            }}>{title}</h2> : null}
            {lead ? <p style={{
              margin: '14px 0 0', fontSize: 'var(--ui-text)', lineHeight: 1.6, maxWidth: 'var(--measure)',
              marginLeft: center ? 'auto' : 0, marginRight: center ? 'auto' : 0,
              color: dark ? 'var(--chrome-ink)' : 'currentColor', opacity: dark ? 1 : .85
            }}>{lead}</p> : null}
            {actions ? <div style={{
              display: 'flex', gap: '12px', marginTop: '26px',
              justifyContent: center ? 'center' : 'flex-start'
            }}>{actions}</div> : null}
          </header>
        ) : null}
        {children}
      </div>
    </section>
  );
}

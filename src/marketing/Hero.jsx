import React from 'react';

/** Opening band of a landing page — the one place the chrome field runs full-bleed behind display type. */
export function Hero({ eyebrow, title, lead, actions, note, media, tone = 'chrome', style, ...rest }) {
  const dark = tone === 'chrome';
  return (
    <section style={{
      background: dark ? 'var(--chrome)' : 'var(--page)',
      color: dark ? '#fff' : 'var(--ink)',
      padding: 'var(--pad-screen)', ...style
    }} {...rest}>
      <div style={{
        maxWidth: 'var(--container)', margin: '0 auto',
        display: 'grid', gridTemplateColumns: media ? 'minmax(0, 1.05fr) minmax(0, .95fr)' : 'minmax(0, 1fr)',
        gap: '48px', alignItems: 'center'
      }}>
        <div>
          {eyebrow ? <div style={{
            fontFamily: 'var(--mono)', fontSize: 'var(--ui-text-sm)', textTransform: 'uppercase',
            letterSpacing: '.09em', color: dark ? 'var(--leather-2)' : 'var(--leather)', marginBottom: '18px'
          }}>{eyebrow}</div> : null}
          <h1 style={{
            margin: 0, fontSize: 'var(--ui-display)', lineHeight: 1.04,
            letterSpacing: '-.03em', fontWeight: 'var(--weight-semibold)', textWrap: 'pretty'
          }}>{title}</h1>
          {lead ? <p style={{
            margin: '20px 0 0', fontSize: 'var(--ui-text-lg)', lineHeight: 1.55, maxWidth: 'var(--measure)',
            color: dark ? 'var(--chrome-ink)' : 'var(--ink-2)'
          }}>{lead}</p> : null}
          {actions ? <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '32px' }}>{actions}</div> : null}
          {note ? <div style={{
            marginTop: '18px', fontSize: 'var(--ui-text-sm)',
            color: dark ? 'var(--chrome-mut)' : 'var(--ink-3)'
          }}>{note}</div> : null}
        </div>
        {media ? <div style={{ minWidth: 0 }}>{media}</div> : null}
      </div>
    </section>
  );
}

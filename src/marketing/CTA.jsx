import React from 'react';

/** Closing band: one decision, one primary action. Leather ground is reserved for this. */
export function CTA({ title, lead, actions, note, tone = 'leather', style, ...rest }) {
  const leather = tone === 'leather';
  return (
    <section style={{
      background: leather ? 'var(--leather)' : 'var(--chrome)', color: '#fff',
      padding: 'var(--pad-screen)', ...style
    }} {...rest}>
      <div style={{
        maxWidth: 'var(--container)', margin: '0 auto',
        display: 'flex', flexWrap: 'wrap', gap: '32px',
        alignItems: 'center', justifyContent: 'space-between'
      }}>
        <div style={{ minWidth: 0, maxWidth: 'var(--measure)' }}>
          <h2 style={{
            margin: 0, fontSize: 'var(--ui-title)', lineHeight: 1.15,
            letterSpacing: '-.02em', fontWeight: 'var(--weight-semibold)', textWrap: 'pretty'
          }}>{title}</h2>
          {lead ? <p style={{ margin: '12px 0 0', fontSize: 'var(--ui-text)', lineHeight: 1.6, opacity: .92 }}>{lead}</p> : null}
        </div>
        <div>
          {actions ? <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>{actions}</div> : null}
          {note ? <div style={{ marginTop: '14px', fontSize: 'var(--ui-text-sm)', opacity: .8 }}>{note}</div> : null}
        </div>
      </div>
    </section>
  );
}

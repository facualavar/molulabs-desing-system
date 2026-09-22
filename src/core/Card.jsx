import React from 'react';

export function Card({ title, meta, pad = true, actions, children, style }) {
  return (
    <section style={{
      background: 'var(--card)', border: 'var(--border-hair)', borderRadius: 'var(--r)',
      overflow: 'hidden', ...style
    }}>
      {(title || actions) ? (
        <header style={{
          display: 'flex', alignItems: 'baseline', gap: '12px',
          padding: '12px 16px', borderBottom: 'var(--border-hair-soft)'
        }}>
          {title ? <h2 style={{ margin: 0, fontSize: 'var(--text-md)', fontWeight: 'var(--weight-semibold)' }}>{title}</h2> : null}
          {meta ? <span style={{ fontSize: 'var(--text-base)', color: 'var(--ink-3)' }}>{meta}</span> : null}
          {actions ? <div style={{ marginLeft: 'auto' }}>{actions}</div> : null}
        </header>
      ) : null}
      <div style={pad ? { padding: 'var(--pad-card)' } : undefined}>{children}</div>
    </section>
  );
}

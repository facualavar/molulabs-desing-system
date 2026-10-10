import React from 'react';

/** Site footer on the chrome field: wordmark, link columns, legal line. */
export function Footer({ brand = 'Molulabs', tagline, columns = [], legal, style, ...rest }) {
  return (
    <footer style={{
      background: 'var(--chrome)', color: 'var(--chrome-ink)',
      padding: 'var(--pad-screen)', ...style
    }} {...rest}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: 'minmax(220px, 1fr) repeat(auto-fit, minmax(150px, auto))',
          gap: '40px', alignItems: 'start'
        }}>
          <div>
            <div style={{
              fontSize: 'var(--ui-text-lg)', fontWeight: 'var(--weight-semibold)',
              letterSpacing: '-.02em', color: '#fff'
            }}>{brand}</div>
            {tagline ? <p style={{
              margin: '10px 0 0', fontSize: 'var(--ui-text-sm)', lineHeight: 1.6,
              color: 'var(--chrome-mut)', maxWidth: '34ch'
            }}>{tagline}</p> : null}
          </div>
          {columns.map((c, i) => (
            <nav key={i} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{
                fontFamily: 'var(--mono)', fontSize: 'var(--text-xs)', textTransform: 'uppercase',
                letterSpacing: '.09em', color: 'var(--chrome-mut)', marginBottom: '2px'
              }}>{c.label}</div>
              {(c.links || []).map((l, j) => (
                <a key={j} href={l.href || '#'} style={{
                  fontSize: 'var(--ui-text-sm)', color: 'var(--chrome-ink)', lineHeight: 1.4
                }}>{l.label}</a>
              ))}
            </nav>
          ))}
        </div>
        {legal ? <div style={{
          marginTop: '40px', paddingTop: '20px', borderTop: '1px solid var(--chrome-line)',
          fontSize: 'var(--text-xs)', color: 'var(--chrome-mut)'
        }}>{legal}</div> : null}
      </div>
    </footer>
  );
}

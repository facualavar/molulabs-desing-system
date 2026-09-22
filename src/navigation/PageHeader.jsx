import React from 'react';

export function PageHeader({ title, back, onBack, tags, actions, sub, style }) {
  return (
    <header style={{ margin: '0 0 20px', ...style }}>
      {back ? (
        <a href="#" onClick={e => { e.preventDefault(); onBack && onBack(); }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: 'var(--text-base)', color: 'var(--ink-2)', marginBottom: '8px' }}>
          <i className="ti ti-arrow-left" style={{ fontSize: '16px' }} />{back}
        </a>
      ) : null}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
        <h1 style={{ margin: 0, fontSize: 'var(--text-2xl)', fontWeight: 'var(--weight-semibold)', letterSpacing: 'var(--tracking-title)' }}>{title}</h1>
        {tags ? <div style={{ display: 'flex', gap: '6px' }}>{tags}</div> : null}
        {actions ? <div style={{ marginLeft: 'auto', display: 'flex', gap: '10px' }}>{actions}</div> : null}
      </div>
      {sub ? <p style={{ margin: '4px 0 0', fontSize: 'var(--text-base)', color: 'var(--ink-2)' }}>{sub}</p> : null}
    </header>
  );
}

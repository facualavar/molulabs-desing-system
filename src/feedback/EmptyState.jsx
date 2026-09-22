import React from 'react';

export function EmptyState({ icon = 'ti-inbox', title, children, actions, style }) {
  return (
    <div style={{
      background: 'var(--card)', border: 'var(--border-hair)', borderRadius: 'var(--r)',
      padding: '48px 28px', textAlign: 'center', ...style
    }}>
      <i className={'ti ' + icon} style={{ fontSize: '30px', color: 'var(--ink-3)' }} />
      <h2 style={{ margin: '10px 0 4px', fontSize: 'var(--text-lg)', fontWeight: 'var(--weight-semibold)' }}>{title}</h2>
      <p style={{ margin: '0 auto', maxWidth: '46ch', fontSize: 'var(--text-base)', color: 'var(--ink-2)' }}>{children}</p>
      {actions ? <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '16px' }}>{actions}</div> : null}
    </div>
  );
}

import React from 'react';

export function SectionHeader({ title, description, index, actions, first, style }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'flex-start', gap: 12, flexWrap: 'wrap',
      paddingTop: first ? 0 : 'var(--gap-section, 20px)', marginTop: first ? 0 : 4,
      borderTop: first ? 'none' : 'var(--border-hair-soft)', ...style
    }}>
      {index != null ? (
        <span style={{ fontFamily: 'var(--mono)', fontSize: 'var(--ui-text-sm)', color: 'var(--ink-3)', lineHeight: 1.6, minWidth: 18 }}>{String(index).padStart(2, '0')}</span>
      ) : null}
      <div style={{ flex: '1 1 240px', minWidth: 0 }}>
        <h3 style={{ margin: 0, fontSize: 'var(--ui-text)', fontWeight: 'var(--weight-semibold)', color: 'var(--ink)', lineHeight: 1.4 }}>{title}</h3>
        {description ? <p style={{ margin: '2px 0 0', fontSize: 'var(--ui-text-sm)', color: 'var(--ink-3)', textWrap: 'pretty', maxWidth: '64ch' }}>{description}</p> : null}
      </div>
      {actions ? <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>{actions}</div> : null}
    </div>
  );
}

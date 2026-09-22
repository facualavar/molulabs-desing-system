import React from 'react';

export function KeyValueList({ items, style }) {
  return (
    <dl style={{ margin: 0, ...style }}>
      {items.map((it, i) => (
        <div key={i} style={{
          display: 'flex', gap: '16px', alignItems: 'baseline', padding: '7px 0',
          borderBottom: i < items.length - 1 ? 'var(--border-hair-soft)' : 'none'
        }}>
          <dt style={{ fontSize: 'var(--text-base)', color: 'var(--ink-2)' }}>{it.k}</dt>
          <dd style={{
            margin: 0, marginLeft: 'auto', textAlign: 'right', fontSize: it.mono ? '13px' : 'var(--text-base)',
            fontFamily: it.mono ? 'var(--mono)' : 'inherit'
          }}>{it.v}</dd>
        </div>
      ))}
    </dl>
  );
}

import React from 'react';

export function KeyValueList({ items, style }) {
  const emph = it => !!(it && (it.emphasis || it.total));
  return (
    <dl style={{ margin: 0, ...style }}>
      {items.map((it, i) => {
        const e = emph(it);
        const nextE = emph(items[i + 1]);
        return (
          <div key={i} style={{
            display: 'flex', gap: '16px', alignItems: 'baseline', padding: e ? '10px 0 7px' : '7px 0',
            borderTop: e && i > 0 ? 'var(--border-hair)' : 'none',
            borderBottom: i < items.length - 1 && !nextE ? 'var(--border-hair-soft)' : 'none'
          }}>
            <dt style={{ fontSize: 'var(--text-base)', color: e ? 'var(--ink)' : 'var(--ink-2)', fontWeight: e ? 600 : 400 }}>{it.k}</dt>
            <dd style={{
              margin: 0, marginLeft: 'auto', textAlign: 'right',
              fontSize: it.mono ? (e ? '15px' : '13px') : (e ? 'var(--text-md)' : 'var(--text-base)'),
              fontFamily: it.mono ? 'var(--mono)' : 'inherit', fontWeight: e ? 600 : 400, color: 'var(--ink)'
            }}>{it.v}</dd>
          </div>
        );
      })}
    </dl>
  );
}

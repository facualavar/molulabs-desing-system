import React from 'react';
import { actionLinks } from './MapLayout.jsx';

export function MapPopup({ title, sub, items, actions, style }) {
  return (
    <div style={{ maxWidth: 260, fontFamily: 'var(--sans)', color: 'var(--ink)', display: 'flex', flexDirection: 'column', gap: '8px', ...style }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        <div style={{ fontSize: 'var(--text-md)', fontWeight: 600, lineHeight: 'var(--leading-tight)' }}>{title}</div>
        {sub != null ? <div style={{ fontFamily: 'var(--mono)', fontSize: 'var(--text-sm)', color: 'var(--ink-2)' }}>{sub}</div> : null}
      </div>
      {items && items.length ? (
        <dl style={{ margin: 0 }}>
          {items.map((it, i) => (
            <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'baseline', padding: '4px 0', borderBottom: i < items.length - 1 ? 'var(--border-hair-soft)' : 'none' }}>
              <dt style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-2)', fontWeight: it.emphasis || it.total ? 600 : 400 }}>{it.k}</dt>
              <dd style={{ margin: 0, marginLeft: 'auto', textAlign: 'right', fontSize: 'var(--text-sm)', fontFamily: it.mono ? 'var(--mono)' : 'inherit', fontWeight: it.emphasis || it.total ? 600 : 400 }}>{it.v}</dd>
            </div>
          ))}
        </dl>
      ) : null}
      {actions && actions.length ? <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 14px' }}>{actionLinks(actions, 'p')}</div> : null}
    </div>
  );
}

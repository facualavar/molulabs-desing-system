import React from 'react';
import { Button } from '../core/Button.jsx';

export function SettingsList({ items = [], style }) {
  return (
    <ul style={{ listStyle: 'none', margin: 0, padding: 0, ...style }}>
      {items.map((it, i) => (
        <li key={it.id != null ? it.id : i} style={{
          display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap',
          padding: 'var(--pad-cell)', paddingLeft: 14, paddingRight: 14, minHeight: 'var(--tap-min)', boxSizing: 'border-box',
          borderBottom: i < items.length - 1 ? 'var(--border-hair-soft)' : 'none'
        }}>
          <i className={'ti ' + (it.icon || 'ti-settings')} style={{ fontSize: '19px', flex: 'none', color: 'var(--leather)' }} />
          <span style={{ flex: '1 1 200px', minWidth: 0 }}>
            <span style={{ display: 'block', fontSize: 'var(--text-base)', fontWeight: 'var(--weight-medium)', color: 'var(--ink)' }}>{it.title}</span>
            {it.detail ? <span style={{ display: 'block', fontSize: 'var(--text-sm)', color: 'var(--ink-2)', marginTop: 1 }}>{it.detail}</span> : null}
          </span>
          <span style={{ flex: 'none', marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8 }}>
            {it.action !== undefined ? it.action : <Button tone="secondary" size="sm" onClick={it.onClick}>{it.actionLabel || 'Abrir'}</Button>}
          </span>
        </li>
      ))}
    </ul>
  );
}

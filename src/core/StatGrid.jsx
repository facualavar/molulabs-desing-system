import React from 'react';
import { StatTile } from './StatTile.jsx';

export function StatGrid({ items, children, min = 250, style }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, ' + min + 'px), 1fr))', gap: 'var(--gap, 14px)', ...style }}>
      {items ? items.map((it, i) => <StatTile key={i} {...it} />) : children}
    </div>
  );
}

import React from 'react';

export function StatTile({ label, value, detail, style }) {
  return (
    <div style={{
      background: 'var(--card)', border: 'var(--border-hair)', borderRadius: 'var(--r)',
      padding: 'var(--pad-card)', minWidth: 0, ...style
    }}>
      <div style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-3)' }}>{label}</div>
      <div style={{
        fontFamily: 'var(--mono)', fontSize: 'var(--text-stat)', lineHeight: 1.2,
        margin: '4px 0 2px', whiteSpace: 'nowrap'
      }}>{value}</div>
      {detail ? <div style={{ fontSize: 'var(--text-base)', color: 'var(--ink-2)' }}>{detail}</div> : null}
    </div>
  );
}

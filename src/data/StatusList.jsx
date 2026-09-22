import React from 'react';

const dots = { ok: 'var(--ok)', warn: 'var(--warn)', bad: 'var(--alert)', mut: 'var(--ink-3)' };

export function StatusList({ items, style }) {
  return (
    <div style={style}>
      {items.map((it, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '9px', fontSize: 'var(--text-base)', padding: '5px 0' }}>
          <span style={{ width: 7, height: 7, borderRadius: 'var(--r-round)', flex: 'none', background: dots[it.tone] || dots.mut }} />
          <span style={{ color: 'var(--ink-2)' }}>{it.label}</span>
          <span style={{
            marginLeft: 'auto', color: 'var(--ink)',
            fontFamily: it.mono ? 'var(--mono)' : 'inherit', fontSize: it.mono ? '13px' : 'inherit'
          }}>{it.value}</span>
        </div>
      ))}
    </div>
  );
}

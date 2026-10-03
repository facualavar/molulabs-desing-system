import React from 'react';

const TONE = { alert: 'var(--alert)', warn: 'var(--warn)', mut: 'var(--ink-3)' };

export function TaskList({ items = [], empty, style }) {
  const [hover, setHover] = React.useState(-1);
  if (!items.length && empty) return <div style={{ padding: '24px 16px', display: 'flex', justifyContent: 'center' }}>{empty}</div>;
  return (
    <ul style={{ listStyle: 'none', margin: 0, padding: 0, ...style }}>
      {items.map((it, i) => {
        const El = it.onClick ? 'button' : 'div';
        return (
          <li key={it.id != null ? it.id : i} style={{ borderBottom: i < items.length - 1 ? 'var(--border-hair-soft)' : 'none' }}>
            <El type={it.onClick ? 'button' : undefined} onClick={it.onClick}
              onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(-1)}
              style={{
                display: 'flex', alignItems: 'center', gap: '12px', width: '100%', boxSizing: 'border-box', textAlign: 'left',
                padding: 'var(--pad-cell)', paddingLeft: 14, paddingRight: 14, minHeight: 'var(--tap-min)',
                border: 0, font: 'inherit', color: 'var(--ink)', cursor: it.onClick ? 'pointer' : 'default',
                background: hover === i && it.onClick ? 'var(--zebra)' : 'transparent'
              }}>
              <i className={'ti ' + (it.icon || 'ti-alert-circle')} style={{ fontSize: '19px', flex: 'none', color: TONE[it.tone] || TONE.mut }} />
              <span style={{ flex: 1, minWidth: 0 }}>
                <span style={{ display: 'block', fontSize: 'var(--text-base)', fontWeight: 'var(--weight-medium)' }}>{it.title}</span>
                {it.detail ? <span style={{ display: 'block', fontSize: 'var(--text-sm)', color: 'var(--ink-2)', marginTop: 1 }}>{it.detail}</span> : null}
              </span>
              {it.meta ? <span style={{ flex: 'none', fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--ink-3)' }}>{it.meta}</span> : null}
              {it.onClick ? <i className="ti ti-chevron-right" style={{ flex: 'none', fontSize: '16px', color: 'var(--ink-3)' }} /> : null}
            </El>
          </li>
        );
      })}
    </ul>
  );
}

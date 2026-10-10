import React from 'react';

/** Bottom tab bar — 3–5 destinations, each a 44px+ tap target. */
export function TabBar({ items = [], current, onNavigate, style, ...rest }) {
  return (
    <nav style={{
      display: 'grid', gridTemplateColumns: 'repeat(' + Math.max(items.length, 1) + ', 1fr)',
      background: 'var(--card)', borderTop: 'var(--border-hair)',
      paddingBottom: 'env(safe-area-inset-bottom, 0px)',
      position: 'sticky', bottom: 0, zIndex: 20, ...style
    }} {...rest}>
      {items.map(it => {
        const on = it.key === current;
        return (
          <button key={it.key} onClick={() => onNavigate && onNavigate(it.key)}
            aria-current={on ? 'page' : undefined}
            style={{
              position: 'relative', minHeight: 'var(--tap-min)', padding: '7px 4px 9px',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px',
              background: 'transparent', border: 0,
              color: on ? 'var(--chrome)' : 'var(--ink-3)'
            }}>
            <span style={{ position: 'relative', lineHeight: 0 }}>
              <i className={'ti ' + it.icon} style={{ fontSize: '23px' }} />
              {it.badge ? <span style={{
                position: 'absolute', top: '-3px', right: '-8px', minWidth: '15px', height: '15px',
                borderRadius: 'var(--r-pill)', background: 'var(--alert)', color: '#fff',
                fontSize: '10px', fontWeight: 'var(--weight-semibold)', display: 'grid', placeItems: 'center', padding: '0 4px'
              }}>{it.badge}</span> : null}
            </span>
            <span style={{
              fontSize: 'var(--text-xs)', lineHeight: 1,
              fontWeight: on ? 'var(--weight-semibold)' : 'var(--weight-regular)'
            }}>{it.label}</span>
            {on ? <span style={{
              position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
              width: '28px', height: '2px', background: 'var(--leather)'
            }} /> : null}
          </button>
        );
      })}
    </nav>
  );
}

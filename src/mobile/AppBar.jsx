import React from 'react';

/** Top bar for mobile screens — the chrome field, 56px tall at touch density. */
export function AppBar({ title, sub, onBack, backLabel = 'Volver', actions, tone = 'chrome', style, ...rest }) {
  const dark = tone === 'chrome';
  return (
    <header style={{
      display: 'flex', alignItems: 'center', gap: '4px',
      minHeight: 'calc(var(--tap-min) + 12px)',
      padding: '8px 8px 8px ' + (onBack ? '4px' : '16px'),
      background: dark ? 'var(--chrome)' : 'var(--card)',
      color: dark ? '#fff' : 'var(--ink)',
      borderBottom: dark ? '1px solid var(--chrome-line)' : 'var(--border-hair)',
      position: 'sticky', top: 0, zIndex: 20, ...style
    }} {...rest}>
      {onBack ? (
        <button onClick={onBack} aria-label={backLabel} style={{
          width: 'var(--tap-min)', height: 'var(--tap-min)', display: 'grid', placeItems: 'center',
          background: 'transparent', border: 0, borderRadius: 'var(--r-sm)',
          color: dark ? '#fff' : 'var(--ink-2)', flex: '0 0 auto'
        }}><i className="ti ti-chevron-left" style={{ fontSize: '22px' }} /></button>
      ) : null}
      <div style={{ flex: 1, minWidth: 0, padding: onBack ? 0 : '0' }}>
        <div style={{
          fontSize: 'var(--ui-text-lg)', fontWeight: 'var(--weight-semibold)',
          letterSpacing: 'var(--tracking-title)', lineHeight: 1.2,
          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'
        }}>{title}</div>
        {sub ? <div style={{
          fontSize: 'var(--ui-text-sm)', lineHeight: 1.3, marginTop: '1px',
          color: dark ? 'var(--chrome-mut)' : 'var(--ink-3)',
          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'
        }}>{sub}</div> : null}
      </div>
      {actions ? <div style={{ display: 'flex', alignItems: 'center', gap: '2px', flex: '0 0 auto' }}>{actions}</div> : null}
    </header>
  );
}

/** Icon-only action for the AppBar right slot — always a full tap target. */
export function AppBarAction({ icon, label, onClick, tone = 'chrome', badge }) {
  const dark = tone === 'chrome';
  return (
    <button onClick={onClick} aria-label={label} style={{
      position: 'relative', width: 'var(--tap-min)', height: 'var(--tap-min)',
      display: 'grid', placeItems: 'center', background: 'transparent', border: 0,
      borderRadius: 'var(--r-sm)', color: dark ? '#fff' : 'var(--ink-2)'
    }}>
      <i className={'ti ' + icon} style={{ fontSize: '21px' }} />
      {badge ? <span style={{
        position: 'absolute', top: '6px', right: '6px', minWidth: '16px', height: '16px',
        borderRadius: 'var(--r-pill)', background: 'var(--alert)', color: '#fff',
        fontSize: '10.5px', fontWeight: 'var(--weight-semibold)', display: 'grid', placeItems: 'center', padding: '0 4px'
      }}>{badge}</span> : null}
    </button>
  );
}

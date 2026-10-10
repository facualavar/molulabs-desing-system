import React from 'react';

/** Bottom sheet — the mobile stand-in for Dialog and for row action menus. */
export function Sheet({ open, title, sub, onClose, actions, children, style, ...rest }) {
  if (!open) return null;
  return (
    <div onClick={onClose} style={{
      position: 'absolute', inset: 0, zIndex: 40, display: 'flex', alignItems: 'flex-end',
      background: 'var(--scrim)'
    }}>
      <div onClick={e => e.stopPropagation()} role="dialog" aria-modal="true" style={{
        width: '100%', maxHeight: '86%', overflowY: 'auto',
        background: 'var(--card)', borderRadius: 'var(--r-lg) var(--r-lg) 0 0',
        boxShadow: 'var(--shadow-dialog)',
        padding: '8px 16px calc(16px + env(safe-area-inset-bottom, 0px))',
        animation: 'sheet-up var(--dur) var(--ease)', ...style
      }} {...rest}>
        <div style={{ width: '38px', height: '4px', borderRadius: 'var(--r-pill)', background: 'var(--line)', margin: '0 auto 12px' }} />
        {title ? (
          <div style={{ marginBottom: sub ? '2px' : '10px' }}>
            <div style={{ fontSize: 'var(--ui-title)', fontWeight: 'var(--weight-semibold)', letterSpacing: 'var(--tracking-title)' }}>{title}</div>
          </div>
        ) : null}
        {sub ? <div style={{ fontSize: 'var(--ui-text-sm)', color: 'var(--ink-2)', marginBottom: '12px' }}>{sub}</div> : null}
        {children}
        {actions ? <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '16px' }}>{actions}</div> : null}
      </div>
    </div>
  );
}

/** A full-width row inside a Sheet used as an action menu. */
export function SheetAction({ icon, label, meta, tone = 'default', onClick }) {
  const danger = tone === 'danger';
  return (
    <button onClick={onClick} style={{
      display: 'flex', alignItems: 'center', gap: '12px', width: '100%',
      minHeight: 'var(--tap-min)', padding: 'var(--pad-row)',
      background: 'transparent', border: 0, borderTop: 'var(--border-hair-soft)',
      textAlign: 'left', color: danger ? 'var(--alert)' : 'var(--ink)', fontSize: 'var(--ui-text)'
    }}>
      {icon ? <i className={'ti ' + icon} style={{ fontSize: '20px', color: danger ? 'var(--alert)' : 'var(--leather)' }} /> : null}
      <span style={{ flex: 1 }}>{label}</span>
      {meta ? <span style={{ fontSize: 'var(--ui-text-sm)', color: 'var(--ink-3)' }}>{meta}</span> : null}
    </button>
  );
}

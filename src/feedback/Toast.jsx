import React from 'react';

export const TOAST_TONES = {
  info:    { icon: 'ti-info-circle',   color: 'var(--ink-2)', bar: 'var(--ink-3)', bg: 'var(--card)',      ink: 'var(--ink)' },
  success: { icon: 'ti-circle-check',  color: 'var(--ok)',    bar: 'var(--ok)',    bg: 'var(--ok-bg)',     ink: 'var(--ok-ink)' },
  warning: { icon: 'ti-alert-triangle',color: 'var(--warn)',  bar: 'var(--warn)',  bg: 'var(--warn-bg)',   ink: 'var(--warn-ink)' },
  danger:  { icon: 'ti-alert-octagon', color: 'var(--alert)', bar: 'var(--alert)', bg: 'var(--alert-bg)',  ink: 'var(--alert-ink)' }
};

export function Toast({ tone = 'info', title, children, action, onAction, onClose, style }) {
  const c = TOAST_TONES[tone] || TOAST_TONES.info;
  return (
    <div role="status" style={{
      display: 'flex', gap: '11px', alignItems: 'flex-start',
      background: c.bg, border: 'var(--border-hair)', borderLeft: 'var(--bar-status) solid ' + c.bar,
      borderRadius: '0 var(--r) var(--r) 0', padding: '12px 12px 12px 14px',
      boxShadow: 'var(--shadow-toast)', animation: 'toast-in var(--dur) var(--ease)', ...style
    }}>
      <i className={'ti ' + c.icon} style={{ fontSize: '20px', color: c.color, flex: 'none', marginTop: '1px' }} />
      <div style={{ minWidth: 0, flex: 1 }}>
        <div style={{ fontSize: 'var(--text-md)', fontWeight: 'var(--weight-semibold)', color: c.ink }}>{title}</div>
        {children ? <div style={{ fontSize: '13px', color: 'var(--ink-2)', marginTop: '1px' }}>{children}</div> : null}
        {action ? (
          <button onClick={onAction} style={{
            marginTop: '8px', background: 'transparent', border: '1px solid ' + c.bar, color: c.ink,
            borderRadius: 'var(--r)', padding: '5px 11px', fontSize: '13px', fontWeight: 'var(--weight-medium)'
          }}>{action}</button>
        ) : null}
      </div>
      {onClose ? (
        <button onClick={onClose} aria-label="Cerrar aviso" style={{
          flex: 'none', width: 26, height: 26, border: 0, background: 'transparent', color: 'var(--ink-3)',
          borderRadius: 'var(--r-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px'
        }}><i className="ti ti-x" /></button>
      ) : null}
    </div>
  );
}

export function ToastStack({ children, style }) {
  return (
    <div style={{
      position: 'fixed', right: '22px', bottom: '22px', zIndex: 80,
      display: 'flex', flexDirection: 'column', gap: '10px',
      width: 'var(--toast-width)', maxWidth: 'calc(100vw - 44px)', ...style
    }}>{children}</div>
  );
}

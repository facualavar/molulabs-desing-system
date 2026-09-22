import React from 'react';

const tones = {
  danger:  { bar: 'var(--alert)', bg: 'var(--alert-bg)', color: 'var(--alert)', ink: 'var(--alert-ink)', sub: '#7E2B22', icon: 'ti-file-alert' },
  warning: { bar: 'var(--warn)',  bg: 'var(--warn-bg)',  color: 'var(--warn)',  ink: 'var(--warn-ink)',  sub: '#6B4A0A', icon: 'ti-alert-triangle' },
  success: { bar: 'var(--ok)',    bg: 'var(--ok-bg)',    color: 'var(--ok)',    ink: 'var(--ok-ink)',    sub: '#2C5A3C', icon: 'ti-circle-check' },
  info:    { bar: 'var(--ink-3)', bg: 'var(--card)',     color: 'var(--ink-2)', ink: 'var(--ink)',       sub: 'var(--ink-2)', icon: 'ti-info-circle' }
};

export function AlertBanner({ tone = 'danger', icon, title, children, action, onAction, style }) {
  const c = tones[tone] || tones.danger;
  return (
    <div style={{
      border: 'var(--border-hair)', borderLeft: 'var(--bar-status) solid ' + c.bar, background: c.bg,
      padding: '16px 18px', display: 'flex', alignItems: 'flex-start', gap: '14px',
      borderRadius: '0 var(--r) var(--r) 0', ...style
    }}>
      <i className={'ti ' + (icon || c.icon)} style={{ fontSize: '22px', color: c.color, marginTop: '2px' }} />
      <div style={{ minWidth: 0 }}>
        <h2 style={{ margin: '0 0 3px', fontSize: 'var(--text-lg)', fontWeight: 'var(--weight-semibold)', color: c.ink }}>{title}</h2>
        {children ? <p style={{ margin: 0, fontSize: 'var(--text-base)', color: c.sub }}>{children}</p> : null}
      </div>
      {action ? (
        <button onClick={onAction} style={{
          marginLeft: 'auto', alignSelf: 'center', flex: 'none', background: c.bar, color: '#fff',
          border: 0, padding: '8px 14px', borderRadius: 'var(--r)', fontSize: 'var(--text-base)',
          fontWeight: 'var(--weight-medium)'
        }}>{action}</button>
      ) : null}
    </div>
  );
}

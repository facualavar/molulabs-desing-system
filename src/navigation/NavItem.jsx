import React from 'react';

export function NavItem({ icon, label, badge, active, onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a href="#" onClick={e => { e.preventDefault(); onClick && onClick(); }}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: '10px', padding: 'var(--pad-nav-item)',
        borderRadius: 'var(--r)', fontSize: 'var(--text-md)', textDecoration: 'none',
        background: active ? 'var(--chrome-2)' : hover ? 'var(--chrome-2)' : 'transparent',
        color: active || hover ? '#fff' : 'var(--chrome-ink)',
        boxShadow: active ? 'inset 2px 0 0 var(--leather)' : 'none'
      }}>
      <i className={'ti ' + icon} style={{ fontSize: '18px', flex: 'none' }} />
      {label}
      {badge ? (
        <span style={{
          marginLeft: 'auto', background: 'var(--alert)', color: '#fff', fontSize: 'var(--text-xs)',
          padding: '0 7px', borderRadius: '9px', lineHeight: '18px'
        }}>{badge}</span>
      ) : null}
    </a>
  );
}

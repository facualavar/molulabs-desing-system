import React from 'react';
import { NavItem } from './NavItem.jsx';

export function SideNav({ brand = 'Coop. de Productores', sub = 'Jujuy', initials = 'CP', sections, current, onNavigate, user, style }) {
  return (
    <nav style={{
      width: 'var(--nav-width)', flex: 'none', background: 'var(--chrome)', color: 'var(--chrome-ink)',
      display: 'flex', flexDirection: 'column', padding: '14px 10px',
      position: 'sticky', top: 0, height: '100vh', ...style
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '6px 10px 16px' }}>
        <div style={{
          width: 30, height: 30, flex: 'none', borderRadius: 'var(--r)', background: 'var(--leather)',
          color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 'var(--weight-semibold)', fontSize: '13px'
        }}>{initials}</div>
        <div>
          <div style={{ fontSize: 'var(--text-md)', fontWeight: 'var(--weight-medium)', color: '#fff', lineHeight: 'var(--leading-tight)' }}>{brand}</div>
          <div style={{ fontSize: 'var(--text-xs)', color: 'var(--chrome-mut)' }}>{sub}</div>
        </div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', margin: '0 -4px', padding: '0 4px' }}>
        {sections.map((s, i) => (
          <React.Fragment key={i}>
            {s.label ? (
              <div style={{ fontSize: 'var(--text-xs)', color: 'var(--chrome-mut)', padding: '14px 10px 5px' }}>{s.label}</div>
            ) : null}
            {s.rule ? <div style={{ borderTop: '1px solid var(--chrome-line)', margin: '12px 10px' }} /> : null}
            {s.items.map(it => (
              <NavItem key={it.key} icon={it.icon} label={it.label} badge={it.badge}
                active={it.key === current} onClick={() => onNavigate && onNavigate(it.key)} />
            ))}
          </React.Fragment>
        ))}
      </div>

      {user ? (
        <div style={{ borderTop: '1px solid var(--chrome-line)', paddingTop: '10px', marginTop: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '5px 6px', borderRadius: 'var(--r)' }}>
            <div style={{
              width: 32, height: 32, flex: 'none', borderRadius: 'var(--r-round)', background: 'var(--chrome-2)',
              color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '12px', fontWeight: 'var(--weight-medium)'
            }}>{user.initials}</div>
            <div style={{ minWidth: 0, flex: 1 }}>
              <div style={{ fontSize: '13.5px', color: '#fff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{user.name}</div>
              <div style={{ fontSize: 'var(--text-xs)', color: 'var(--chrome-mut)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{user.role}</div>
            </div>
          </div>
        </div>
      ) : null}
    </nav>
  );
}

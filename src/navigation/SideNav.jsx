import React from 'react';
import { NavItem } from './NavItem.jsx';

export const DEFAULT_USER_ACTIONS = [
  { key: 'perfil', label: 'Configurar mi usuario', icon: 'ti-user-cog' },
  { key: 'password', label: 'Cambiar contraseña', icon: 'ti-key' },
  { key: 'logout', label: 'Cerrar sesión', icon: 'ti-logout', divider: true }
];

function UserMenu({ actions, onAction }) {
  const [open, setOpen] = React.useState(false);
  const [hover, setHover] = React.useState(null);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const down = e => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    const key = e => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', down);
    document.addEventListener('keydown', key);
    return () => { document.removeEventListener('mousedown', down); document.removeEventListener('keydown', key); };
  }, [open]);
  return (
    <div ref={ref} style={{ position: 'relative', flex: 'none' }}>
      <button type="button" aria-label="Opciones de usuario" aria-haspopup="menu" aria-expanded={open}
        onClick={() => setOpen(o => !o)}
        onMouseEnter={() => setHover('btn')} onMouseLeave={() => setHover(null)}
        style={{
          width: 30, height: 30, display: 'flex', alignItems: 'center', justifyContent: 'center',
          border: 0, borderRadius: 'var(--r)', cursor: 'pointer', fontSize: '18px',
          background: open || hover === 'btn' ? 'var(--chrome-2)' : 'transparent',
          color: open || hover === 'btn' ? '#fff' : 'var(--chrome-mut)'
        }}><i className="ti ti-dots" /></button>
      {open ? (
        <div role="menu" style={{
          position: 'absolute', bottom: 'calc(100% + 6px)', right: 0, minWidth: 220, zIndex: 50,
          background: 'var(--card)', color: 'var(--ink)', border: '1px solid var(--line)',
          borderRadius: 'var(--r)', boxShadow: 'var(--shadow-menu)', padding: '4px'
        }}>
          {actions.map(a => (
            <React.Fragment key={a.key}>
              {a.divider ? <div style={{ borderTop: '1px solid var(--line)', margin: '4px 0' }} /> : null}
              <button type="button" role="menuitem"
                onMouseEnter={() => setHover(a.key)} onMouseLeave={() => setHover(null)}
                onClick={() => { setOpen(false); a.onClick && a.onClick(); onAction && onAction(a.key); }}
                style={{
                  width: '100%', display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 10px',
                  border: 0, borderRadius: 'calc(var(--r) - 2px)', cursor: 'pointer', textAlign: 'left',
                  fontFamily: 'inherit', fontSize: '13.5px',
                  background: hover === a.key ? 'var(--zebra)' : 'transparent',
                  color: a.danger ? 'var(--alert)' : 'var(--ink)'
                }}>
                {a.icon ? <i className={'ti ' + a.icon} style={{ fontSize: '16px', color: a.danger ? 'var(--alert)' : 'var(--ink-2)' }} /> : null}
                {a.label}
              </button>
            </React.Fragment>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function SideNav({ brand = 'Coop. de Productores', sub = 'Jujuy', initials = 'CP', sections, current, onNavigate, user, userActions = DEFAULT_USER_ACTIONS, onUserAction, style }) {
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
            {userActions && userActions.length ? <UserMenu actions={userActions} onAction={onUserAction} /> : null}
          </div>
        </div>
      ) : null}
    </nav>
  );
}

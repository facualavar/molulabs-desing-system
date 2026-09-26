import React from 'react';

export function RowActions({ actions = [], label = 'Acciones', style }) {
  const [open, setOpen] = React.useState(false);
  const [pos, setPos] = React.useState(null);
  const btn = React.useRef(null);
  const menu = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const off = e => { if (!menu.current?.contains(e.target) && !btn.current?.contains(e.target)) setOpen(false); };
    const key = e => { if (e.key === 'Escape') { setOpen(false); btn.current?.focus(); } };
    const shut = () => setOpen(false);
    document.addEventListener('mousedown', off);
    document.addEventListener('keydown', key);
    window.addEventListener('scroll', shut, true);
    window.addEventListener('resize', shut);
    return () => { document.removeEventListener('mousedown', off); document.removeEventListener('keydown', key); window.removeEventListener('scroll', shut, true); window.removeEventListener('resize', shut); };
  }, [open]);
  const toggle = e => {
    e.stopPropagation();
    const r = btn.current.getBoundingClientRect();
    const up = window.innerHeight - r.bottom < 40 + actions.length * 40;
    setPos({ right: window.innerWidth - r.right, top: up ? undefined : r.bottom + 4, bottom: up ? window.innerHeight - r.top + 4 : undefined });
    setOpen(o => !o);
  };
  return (
    <span onClick={e => e.stopPropagation()} style={{ display: 'inline-flex', ...style }}>
      <button ref={btn} type="button" aria-label={label} aria-haspopup="menu" aria-expanded={open} onClick={toggle} style={{
        width: 'var(--tap-min)', height: 'var(--tap-min)', maxHeight: 36, maxWidth: 36, border: 0, borderRadius: 'var(--r)',
        background: open ? 'var(--mut-bg)' : 'transparent', color: 'var(--ink-2)', cursor: 'pointer', fontSize: 18,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center'
      }}><i className="ti ti-dots-vertical" /></button>
      {open && pos ? (
        <div ref={menu} role="menu" style={{
          position: 'fixed', right: pos.right, top: pos.top, bottom: pos.bottom, zIndex: 70, minWidth: 180,
          background: 'var(--card)', border: 'var(--border-hair)', borderRadius: 'var(--r)', boxShadow: 'var(--shadow-menu)', padding: 4,
          display: 'flex', flexDirection: 'column'
        }}>
          {actions.map((a, i) => a.divider ? <div key={i} style={{ height: 1, background: 'var(--line-soft)', margin: '4px 0' }} /> : (
            <button key={i} type="button" role="menuitem" disabled={a.disabled}
              onClick={() => { setOpen(false); a.onClick && a.onClick(); }}
              onMouseEnter={e => { if (!a.disabled) e.currentTarget.style.background = 'var(--page)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
              style={{
                display: 'flex', alignItems: 'center', gap: 10, width: '100%', textAlign: 'left', border: 0, background: 'transparent',
                borderRadius: 'var(--r-sm)', padding: '8px 10px', minHeight: 'var(--tap-min)', boxSizing: 'border-box',
                fontFamily: 'var(--sans)', fontSize: 'var(--ui-text-sm)', whiteSpace: 'nowrap',
                color: a.tone === 'danger' ? 'var(--alert)' : 'var(--ink)', opacity: a.disabled ? .45 : 1, cursor: a.disabled ? 'default' : 'pointer'
              }}>
              {a.icon ? <i className={'ti ' + a.icon} style={{ fontSize: 16, color: a.tone === 'danger' ? 'var(--alert)' : 'var(--ink-3)' }} /> : null}
              {a.label}
            </button>
          ))}
        </div>
      ) : null}
    </span>
  );
}

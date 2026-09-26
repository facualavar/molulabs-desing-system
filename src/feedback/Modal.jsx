import React from 'react';

const KEY = '__dsModal';
if (typeof window !== 'undefined' && window.history && window.history.state && window.history.state[KEY]) {
  try { window.history.replaceState(null, ''); } catch (e) {}
}
const WIDTH = { sm: '440px', md: '640px', lg: '880px' };
const Ctx = React.createContext({});

export function Modal({ open, onClose, size = 'md', dismissible = true, closeOnBack = true, contained, labelledBy, children }) {
  const pushed = React.useRef(false);
  const closeRef = React.useRef(onClose);
  closeRef.current = onClose;

  React.useEffect(() => {
    if (!open) return;
    const onKey = e => { if (e.key === 'Escape' && dismissible) closeRef.current && closeRef.current(); };
    window.addEventListener('keydown', onKey);
    let onPop;
    if (closeOnBack && !contained) {
      try { window.history.pushState({ [KEY]: true }, ''); pushed.current = true; } catch (e) {}
      onPop = () => { pushed.current = false; closeRef.current && closeRef.current(); };
      window.addEventListener('popstate', onPop);
    }
    return () => {
      window.removeEventListener('keydown', onKey);
      if (onPop) window.removeEventListener('popstate', onPop);
      if (pushed.current) { pushed.current = false; try { window.history.back(); } catch (e) {} }
    };
  }, [open]);

  if (!open) return null;
  const close = () => closeRef.current && closeRef.current();
  return (
    <Ctx.Provider value={{ close, dismissible }}>
      <div onClick={dismissible ? close : undefined} style={{
        position: contained ? 'absolute' : 'fixed', inset: 0, background: 'var(--scrim)', zIndex: 55,
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--dialog-pad)'
      }}>
        <div role="dialog" aria-modal="true" aria-labelledby={labelledBy} onClick={e => e.stopPropagation()} style={{
          background: 'var(--card)', borderRadius: 'var(--r)', boxShadow: 'var(--shadow-dialog)',
          width: '100%', maxWidth: 'min(' + (WIDTH[size] || WIDTH.md) + ', 100%)', maxHeight: '100%',
          display: 'flex', flexDirection: 'column', overflow: 'hidden'
        }}>{children}</div>
      </div>
    </Ctx.Provider>
  );
}

export function ModalHeader({ title, subtitle, id, children }) {
  const { close, dismissible } = React.useContext(Ctx);
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: 'var(--dialog-pad)', paddingBottom: 12, borderBottom: 'var(--border-hair-soft)' }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <h2 id={id} style={{ margin: 0, fontSize: 'var(--ui-title)', fontWeight: 'var(--weight-semibold)', letterSpacing: 'var(--tracking-title)', color: 'var(--ink)' }}>{title}</h2>
        {subtitle ? <div style={{ marginTop: 4, fontSize: 'var(--ui-text-sm)', color: 'var(--ink-3)' }}>{subtitle}</div> : null}
        {children}
      </div>
      {dismissible ? (
        <button type="button" aria-label="Cerrar" onClick={close} style={{
          flex: 'none', width: 'var(--tap-min)', height: 'var(--tap-min)', margin: '-8px -8px 0 0', border: 0, borderRadius: 'var(--r)',
          background: 'transparent', color: 'var(--ink-3)', cursor: 'pointer', fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}><i className="ti ti-x" /></button>
      ) : null}
    </div>
  );
}

export function ModalBody({ children, style }) {
  return <div style={{ padding: 'var(--dialog-pad)', paddingTop: 16, paddingBottom: 16, overflowY: 'auto', flex: '1 1 auto', display: 'flex', flexDirection: 'column', gap: 14, color: 'var(--ink)', ...style }}>{children}</div>;
}

export function ModalFooter({ note, children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 10, padding: '12px var(--dialog-pad)', borderTop: 'var(--border-hair-soft)', background: 'var(--zebra)' }}>
      <span style={{ marginRight: 'auto', fontSize: 'var(--ui-text-sm)', color: 'var(--ink-3)' }}>{note}</span>
      {children}
    </div>
  );
}

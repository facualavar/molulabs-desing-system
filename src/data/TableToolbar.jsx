import React from 'react';
import * as ReactDOM from 'react-dom';

// With a bundler ReactDOM is the imported module. Claude Design strips imports and loads ReactDOM
// as a global, so the name may be undeclared there: check it with typeof, then try window.ReactDOM.
const portal = (node, target) => {
  const RD = typeof ReactDOM !== 'undefined' && ReactDOM.createPortal ? ReactDOM : typeof window !== 'undefined' && window.ReactDOM;
  return RD && RD.createPortal && target ? RD.createPortal(node, target) : node;
};

function Count({ selection, onClearSelection }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: '1 1 auto', minWidth: 0 }}>
      {onClearSelection ? <button type="button" aria-label="Quitar selección" onClick={onClearSelection} style={{
        border: 0, background: 'transparent', cursor: 'pointer', color: 'var(--ink-2)', display: 'inline-flex',
        alignItems: 'center', justifyContent: 'center', width: 28, height: 28, borderRadius: 'var(--r-sm)', fontSize: '16px', padding: 0
      }}><i className="ti ti-x" /></button> : null}
      <span style={{ fontSize: 'var(--ui-text)', fontWeight: 500, color: 'var(--ink)', whiteSpace: 'nowrap' }}>
        {selection} {selection === 1 ? 'seleccionado' : 'seleccionados'}
      </span>
    </div>
  );
}

export function TableToolbar({ filters, actions, selection = 0, selectionActions, onClearSelection, selectionPlacement = 'inline', filtersMin = 180, style }) {
  const floating = selectionPlacement === 'floating';
  const sel = selection > 0;
  const inlineSel = sel && !floating;
  const anchor = React.useRef(null);
  const [scope, setScope] = React.useState({});
  const [shown, setShown] = React.useState(false);
  React.useLayoutEffect(() => {
    if (!floating || !anchor.current) return;
    const th = anchor.current.closest('[data-theme]'), dn = anchor.current.closest('[data-density]');
    setScope({ theme: th ? th.getAttribute('data-theme') : undefined, density: dn ? dn.getAttribute('data-density') : undefined });
  }, [floating, sel]);
  React.useEffect(() => {
    if (!floating) return;
    if (!sel) { setShown(false); return; }
    const id = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(id);
  }, [floating, sel]);
  React.useEffect(() => {
    if (!floating || !sel || !onClearSelection) return;
    const k = e => { if (e.key === 'Escape') onClearSelection(); };
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [floating, sel, onClearSelection]);
  const actionsBox = node => node ? <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center', justifyContent: 'flex-end', marginLeft: 'auto', flex: 'none', maxWidth: '100%' }}>{node}</div> : null;
  const bar = floating && sel ? portal(
    <div role="region" aria-label="Acciones sobre la selección" data-theme={scope.theme} data-density={scope.density} style={{
      position: 'fixed', left: '50%', bottom: 'calc(20px + env(safe-area-inset-bottom, 0px))', zIndex: 70,
      transform: 'translate(-50%, ' + (shown ? '0' : '12px') + ')', opacity: shown ? 1 : 0,
      transition: 'transform var(--dur-fast) ease-out, opacity var(--dur-fast) ease-out',
      display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px 20px', boxSizing: 'border-box',
      width: 'max-content', maxWidth: 'calc(100vw - 24px)', minHeight: 'var(--tap-min)', padding: '8px 10px 8px 12px',
      background: 'var(--card)', border: '1px solid var(--chrome)', borderRadius: 'var(--r)',
      boxShadow: 'var(--shadow-menu)', fontFamily: 'var(--sans)', color: 'var(--ink)'
    }}>
      <Count selection={selection} onClearSelection={onClearSelection} />
      {actionsBox(selectionActions)}
    </div>, anchor.current && anchor.current.ownerDocument.body) : null;
  return (
    <div ref={anchor} role="toolbar" style={{
      display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px 16px',
      minHeight: 'var(--tap-min)', boxSizing: 'border-box',
      ...(inlineSel ? { background: 'var(--mut-bg)', border: '1px solid var(--chrome)', borderRadius: 'var(--r)', padding: '6px 8px 6px 12px' } : {}),
      ...style
    }}>
      {inlineSel ? <Count selection={selection} onClearSelection={onClearSelection} /> : (
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, ' + filtersMin + 'px), max-content))',
          gap: '8px', alignItems: 'center', flex: '1 1 ' + filtersMin + 'px', minWidth: 0
        }}>{filters}</div>
      )}
      {actionsBox(inlineSel ? selectionActions : actions)}
      {bar}
    </div>
  );
}

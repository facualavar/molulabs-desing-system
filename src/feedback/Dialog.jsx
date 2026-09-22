import React from 'react';

export function Dialog({ open = true, title, children, note, confirmLabel = 'Confirmar', cancelLabel = 'Volver', onConfirm, onCancel, tone = 'primary', contained }) {
  if (!open) return null;
  const btn = {
    borderRadius: 'var(--r)', padding: 'var(--pad-control)', minHeight: 'var(--tap-min)',
    fontSize: 'var(--ui-text)', fontFamily: 'var(--sans)'
  };
  return (
    <div onClick={onCancel} style={{
      position: contained ? 'absolute' : 'fixed', inset: 0, background: 'var(--scrim)', display: 'flex',
      alignItems: 'center', justifyContent: 'center', padding: 'var(--dialog-pad)', zIndex: 60
    }}>
      <div role="dialog" aria-modal="true" onClick={e => e.stopPropagation()} style={{
        background: 'var(--card)', borderRadius: 'var(--r)',
        maxWidth: 'var(--dialog-width)', width: '100%', maxHeight: '100%', overflowY: 'auto',
        padding: 'var(--dialog-pad)', boxShadow: 'var(--shadow-dialog)'
      }}>
        <h2 style={{ margin: '0 0 8px', fontSize: 'var(--ui-title)', fontWeight: 'var(--weight-semibold)', letterSpacing: 'var(--tracking-title)' }}>{title}</h2>
        <div style={{ margin: '0 0 14px', fontSize: 'var(--ui-text)', lineHeight: 1.5, color: 'var(--ink-2)' }}>{children}</div>
        {note ? <p style={{ margin: '0 0 18px', fontSize: 'var(--ui-text-sm)', color: 'var(--ink-3)' }}>{note}</p> : null}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'flex-end' }}>
          <button onClick={onCancel} style={{
            ...btn, background: 'var(--card)', border: 'var(--border-hair)', color: 'var(--ink)'
          }}>{cancelLabel}</button>
          <button onClick={onConfirm} style={{
            ...btn,
            background: tone === 'danger' ? 'var(--alert)' : 'var(--chrome)',
            border: '1px solid ' + (tone === 'danger' ? 'var(--alert)' : 'var(--chrome)'),
            color: '#fff', fontWeight: 'var(--weight-medium)'
          }}>{confirmLabel}</button>
        </div>
      </div>
    </div>
  );
}

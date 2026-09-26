import React from 'react';

export function Field({ label, hint, error, required, htmlFor, children, style }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: 0, ...style }}>
      {label ? (
        <label htmlFor={htmlFor} style={{ fontSize: 'var(--ui-text-sm)', color: 'var(--ink-2)' }}>
          {label}{required ? <span style={{ color: 'var(--alert)' }}> *</span> : null}
        </label>
      ) : null}
      {children}
      {error ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: 'var(--ui-text-sm)', color: 'var(--alert)' }}>
          <i className="ti ti-alert-circle" style={{ fontSize: '14px' }} />{error}
        </div>
      ) : hint ? (
        <div style={{ fontSize: 'var(--ui-text-sm)', color: 'var(--ink-3)' }}>{hint}</div>
      ) : null}
    </div>
  );
}

/** Shared visual contract for every control that looks like a box. */
export function controlStyle({ invalid, disabled, mono, align, focus, readOnly } = {}) {
  if (readOnly) focus = false;
  return {
    width: '100%', background: readOnly ? 'var(--zebra)' : 'var(--card)', color: 'var(--ink)',
    border: '1px solid ' + (invalid ? 'var(--alert)' : focus ? 'var(--leather)' : readOnly ? 'var(--line-soft)' : 'var(--line)'),
    cursor: readOnly ? 'default' : undefined,
    borderRadius: 'var(--r)', padding: 'var(--pad-field)', minHeight: 'var(--tap-min)',
    fontFamily: mono ? 'var(--mono)' : 'var(--sans)',
    fontSize: mono ? 'var(--field-mono)' : 'var(--ui-text)',
    lineHeight: 1.4, textAlign: align || 'left',
    outline: focus ? '1px solid var(--leather)' : 'none',
    opacity: disabled ? .45 : 1,
    transition: 'border-color var(--dur-fast)'
  };
}

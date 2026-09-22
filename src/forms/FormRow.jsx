import React from 'react';

export function FormRow({ cols = 2, min = 220, children, style }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(' + min + 'px, 1fr))',
      gap: '14px', alignItems: 'start', ...style
    }}>{children}</div>
  );
}

export function FormActions({ children, note, style }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap',
      paddingTop: '14px', borderTop: 'var(--border-hair-soft)', ...style
    }}>
      {note ? <span style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-3)', marginRight: 'auto' }}>{note}</span> : null}
      <div style={{ display: 'flex', gap: '10px', marginLeft: note ? 0 : 'auto' }}>{children}</div>
    </div>
  );
}

import React from 'react';

/** The mobile replacement for a DataTable row: one record per row, tappable. */
export function ListRow({ title, meta, value, valueMeta, icon, tag, chevron, onClick, first, style, ...rest }) {
  const Tag = onClick ? 'button' : 'div';
  const showChevron = chevron === undefined ? !value : chevron;
  return (
    <Tag onClick={onClick} style={{
      display: 'flex', alignItems: 'center', gap: '10px', width: '100%',
      minHeight: 'var(--row-h)', padding: 'var(--pad-row)',
      background: 'var(--card)', border: 0,
      borderTop: first ? 'none' : 'var(--border-hair-soft)',
      textAlign: 'left', color: 'var(--ink)', fontFamily: 'var(--sans)', ...style
    }} {...rest}>
      {icon ? <span style={{
        flex: '0 0 auto', width: '34px', height: '34px', borderRadius: 'var(--r)',
        background: 'var(--page)', display: 'grid', placeItems: 'center', color: 'var(--leather)'
      }}><i className={'ti ' + icon} style={{ fontSize: '19px' }} /></span> : null}
      <span style={{ flex: 1, minWidth: 0, display: 'block' }}>
        <span style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          fontSize: 'var(--ui-text)', fontWeight: 'var(--weight-medium)', lineHeight: 1.3
        }}>
          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', minWidth: 0 }}>{title}</span>
          {tag ? <span style={{ flex: '0 0 auto' }}>{tag}</span> : null}
        </span>
        {meta ? <span style={{
          display: 'block', fontSize: 'var(--ui-text-sm)', color: 'var(--ink-3)', lineHeight: 1.35, marginTop: '2px',
          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'
        }}>{meta}</span> : null}
      </span>
      {value ? <span style={{ flex: '0 0 auto', textAlign: 'right' }}>
        <span style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: 'var(--ui-text)', fontVariantNumeric: 'tabular-nums' }}>{value}</span>
        {valueMeta ? <span style={{ display: 'block', fontSize: 'var(--text-xs)', color: 'var(--ink-3)', marginTop: '2px' }}>{valueMeta}</span> : null}
      </span> : null}
      {showChevron && onClick ? <i className="ti ti-chevron-right" style={{ fontSize: '18px', color: 'var(--ink-3)', flex: '0 0 auto' }} /> : null}
    </Tag>
  );
}

/** Card-like container that groups ListRows, with an optional section label. */
export function ListGroup({ label, children, style, ...rest }) {
  return (
    <section style={{ ...style }} {...rest}>
      {label ? <div style={{
        fontSize: 'var(--text-xs)', textTransform: 'uppercase', letterSpacing: '.07em',
        color: 'var(--ink-3)', fontWeight: 'var(--weight-semibold)', padding: '0 4px 6px'
      }}>{label}</div> : null}
      <div style={{
        background: 'var(--card)', border: 'var(--border-hair)', borderRadius: 'var(--r)', overflow: 'hidden'
      }}>{children}</div>
    </section>
  );
}

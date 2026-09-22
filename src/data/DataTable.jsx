import React from 'react';

const th = (align) => ({
  textAlign: align || 'left', fontWeight: 'var(--weight-medium)', fontSize: 'var(--text-sm)',
  color: 'var(--ink-3)', padding: 'var(--pad-head)', borderBottom: 'var(--border-hair)',
  background: 'var(--zebra)', whiteSpace: 'nowrap'
});

const td = (o = {}) => ({
  padding: 'var(--pad-cell)', borderBottom: 'var(--border-hair-soft)',
  fontSize: o.mono ? '13px' : 'var(--text-base)', textAlign: o.align || 'left',
  color: o.mut ? 'var(--ink-2)' : 'var(--ink)',
  fontFamily: o.mono ? 'var(--mono)' : 'inherit',
  whiteSpace: o.align === 'right' ? 'nowrap' : 'normal'
});

export function DataTable({ columns, rows, onRowClick, footer, footerTotal }) {
  const [hover, setHover] = React.useState(-1);
  return (
    <div>
      <div style={{ overflowX: 'auto' }}>
        <table>
          <thead>
            <tr>{columns.map((c, i) => <th key={i} style={th(c.align)}>{c.label}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i}
                onClick={onRowClick ? () => onRowClick(r, i) : undefined}
                onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(-1)}
                style={{
                  cursor: onRowClick ? 'pointer' : 'default',
                  background: hover === i && onRowClick ? 'var(--zebra)' : 'transparent'
                }}>
                {r.cells.map((cell, j) => {
                  const col = columns[j] || {};
                  const v = cell && typeof cell === 'object' && !React.isValidElement(cell) ? cell : { value: cell };
                  return (
                    <td key={j} style={td({ align: col.align, mono: col.mono, mut: col.muted })}>
                      {v.value}
                      {v.sub ? <div style={{ fontSize: '12px', color: 'var(--ink-3)' }}>{v.sub}</div> : null}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {(footer || footerTotal) ? (
        <div style={{
          display: 'flex', gap: '12px', alignItems: 'baseline', padding: '10px 14px',
          fontSize: 'var(--text-sm)', color: 'var(--ink-3)', background: 'var(--zebra)',
          borderTop: 'var(--border-hair)'
        }}>
          <span>{footer}</span>
          <span style={{ marginLeft: 'auto', fontFamily: 'var(--mono)' }}>{footerTotal}</span>
        </div>
      ) : null}
    </div>
  );
}

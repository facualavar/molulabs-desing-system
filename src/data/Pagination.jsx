import React from 'react';

const fmt = n => n.toLocaleString('es-AR');
function pages(cur, count) {
  if (count <= 7) return Array.from({ length: count }, (_, i) => i + 1);
  const out = [1];
  const a = Math.max(2, cur - 1), b = Math.min(count - 1, cur + 1);
  if (a > 2) out.push('…');
  for (let i = a; i <= b; i++) out.push(i);
  if (b < count - 1) out.push('…');
  out.push(count);
  return out;
}

export function Pagination({ page = 1, pageSize = 20, total = 0, onPage, pageSizes, onPageSize, disabled, style }) {
  const count = Math.max(1, Math.ceil(total / pageSize));
  const from = total ? (page - 1) * pageSize + 1 : 0;
  const to = Math.min(total, page * pageSize);
  const btn = (on, dis) => ({
    minWidth: 'var(--tap-min)', height: 'var(--tap-min)', padding: '0 8px', boxSizing: 'border-box',
    border: on ? '1px solid var(--chrome)' : '1px solid transparent', borderRadius: 'var(--r)',
    background: on ? 'var(--chrome)' : 'transparent', color: on ? '#fff' : dis ? 'var(--ink-3)' : 'var(--ink-2)',
    fontFamily: 'var(--mono)', fontSize: 'var(--ui-text-sm)', cursor: dis || on ? 'default' : 'pointer',
    opacity: dis ? .45 : 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center'
  });
  const go = p => !disabled && onPage && p >= 1 && p <= count && p !== page && onPage(p);
  return (
    <nav aria-label="Paginación" aria-busy={disabled || undefined} style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', padding: '8px 14px', borderTop: 'var(--border-hair-soft)', ...style }}>
      <span style={{ marginRight: 'auto', fontSize: 'var(--ui-text-sm)', color: 'var(--ink-3)' }}>
        <span style={{ fontFamily: 'var(--mono)', color: 'var(--ink-2)' }}>{fmt(from)}–{fmt(to)}</span> de <span style={{ fontFamily: 'var(--mono)', color: 'var(--ink-2)' }}>{fmt(total)}</span>
      </span>
      {pageSizes && onPageSize ? (
        <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 'var(--ui-text-sm)', color: 'var(--ink-3)' }}>
          Filas
          <select value={pageSize} disabled={disabled} onChange={e => onPageSize(Number(e.target.value))} style={{ fontFamily: 'var(--mono)', fontSize: 'var(--ui-text-sm)', color: 'var(--ink)', background: 'var(--card)', border: 'var(--border-hair)', borderRadius: 'var(--r)', padding: '4px 6px' }}>
            {pageSizes.map(n => <option key={n} value={n}>{n}</option>)}
          </select>
        </label>
      ) : null}
      <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <button type="button" aria-label="Página anterior" disabled={disabled || page <= 1} onClick={() => go(page - 1)} style={btn(false, disabled || page <= 1)}><i className="ti ti-chevron-left" /></button>
        {pages(page, count).map((p, i) => p === '…'
          ? <span key={'e' + i} style={{ ...btn(false, true), opacity: 1, cursor: 'default' }}>…</span>
          : <button type="button" key={p} disabled={disabled} aria-current={p === page ? 'page' : undefined} onClick={() => go(p)} style={btn(p === page, disabled && p !== page)}>{p}</button>)}
        <button type="button" aria-label="Página siguiente" disabled={disabled || page >= count} onClick={() => go(page + 1)} style={btn(false, disabled || page >= count)}><i className="ti ti-chevron-right" /></button>
      </div>
    </nav>
  );
}

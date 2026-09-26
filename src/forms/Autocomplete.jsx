import React from 'react';
import { controlStyle } from './Field.jsx';

const portal = (node, target) => {
  const RD = typeof window !== 'undefined' && window.ReactDOM;
  return RD && RD.createPortal && target ? RD.createPortal(node, target) : node;
};
export const acNorm = s => String(s == null ? '' : s).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
const defaultExact = (it, t) => acNorm(typeof it.label === 'string' ? it.label : it.value) === acNorm(t);
const defaultCreateLabel = t => 'Crear «' + t + '»';

/** Shared engine for Autocomplete and AutocompleteMulti: filtering, keyboard, floating menu, create row. */
export function useAcMenu({ items, query, emptyLabel = 'Sin resultados', onPick, onCreate, createLabel = defaultCreateLabel, matchExact = defaultExact, exclude = [], closeOnPick = true, disabled }) {
  const [open, setOpen] = React.useState(false);
  const [pos, setPos] = React.useState(null);
  const [active, setActive] = React.useState(-1);
  const anchor = React.useRef(null);
  const place = React.useCallback(() => {
    const el = anchor.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const below = window.innerHeight - r.bottom, above = r.top;
    const up = below < 200 && above > below;
    const th = el.closest('[data-theme]'), dn = el.closest('[data-density]');
    setPos({ theme: th ? th.getAttribute('data-theme') : undefined, density: dn ? dn.getAttribute('data-density') : undefined, left: r.left, width: r.width, top: up ? undefined : r.bottom + 4, bottom: up ? window.innerHeight - r.top + 4 : undefined, maxHeight: Math.max(120, Math.min(240, (up ? above : below) - 12)) });
  }, []);
  React.useLayoutEffect(() => {
    if (!open) return;
    place();
    window.addEventListener('scroll', place, true);
    window.addEventListener('resize', place);
    const ro = typeof ResizeObserver !== 'undefined' && anchor.current ? new ResizeObserver(place) : null;
    if (ro) ro.observe(anchor.current);
    return () => { window.removeEventListener('scroll', place, true); window.removeEventListener('resize', place); if (ro) ro.disconnect(); };
  }, [open, place]);
  const text = (query || '').trim();
  const q = acNorm(text);
  const list = q ? items.filter(it => acNorm((typeof it.label === 'string' ? it.label : '') + ' ' + (it.meta || '')).includes(q)) : items;
  const canCreate = !!onCreate && !!text && ![...items, ...exclude].some(it => matchExact(it, text));
  const count = list.length + (canCreate ? 1 : 0);
  React.useEffect(() => { setActive(-1); }, [query]);
  const pick = it => { onPick(it); setActive(-1); if (closeOnPick) setOpen(false); };
  const create = () => { onCreate(text); setActive(-1); if (closeOnPick) setOpen(false); };
  const onKey = e => {
    if (disabled) return;
    if (e.key === 'ArrowDown') { e.preventDefault(); setOpen(true); if (count) setActive(a => (a + 1) % count); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setOpen(true); if (count) setActive(a => (a <= 0 ? count - 1 : a - 1)); }
    else if (e.key === 'Escape') { setOpen(false); setActive(-1); }
    else if (e.key === 'Enter') {
      if (active >= 0 && active < list.length) { e.preventDefault(); pick(list[active]); }
      else if (canCreate && (active === -1 || active === list.length)) { e.preventDefault(); create(); }
    }
  };
  const row = (i, extra) => ({
    display: 'flex', alignItems: 'center', gap: '10px', width: '100%', textAlign: 'left',
    border: 0, background: active === i ? 'var(--page)' : 'transparent', borderRadius: 'var(--r-sm)', padding: '7px 9px',
    minHeight: 'var(--tap-min)', boxSizing: 'border-box', cursor: 'pointer', color: 'var(--ink)', fontFamily: 'var(--sans)', ...extra
  });
  const node = open && !disabled && pos ? (
    <div role="listbox" data-theme={pos.theme} data-density={pos.density} style={{
      position: 'fixed', left: pos.left, width: pos.width, top: pos.top, bottom: pos.bottom, zIndex: 80, boxSizing: 'border-box',
      background: 'var(--card)', border: 'var(--border-hair)', borderRadius: 'var(--r)',
      boxShadow: 'var(--shadow-menu)', padding: '4px', maxHeight: pos.maxHeight, overflowY: 'auto', fontFamily: 'var(--sans)', color: 'var(--ink)'
    }}>
      {list.map((it, i) => (
        <button key={i} type="button" role="option" aria-selected={active === i}
          onMouseDown={e => { e.preventDefault(); pick(it); }}
          onMouseEnter={() => setActive(i)} style={row(i)}>
          <span style={{ fontSize: 'var(--ui-text)' }}>{it.label}</span>
          {it.meta ? <span style={{ marginLeft: 'auto', fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--ink-3)' }}>{it.meta}</span> : null}
        </button>
      ))}
      {!list.length && !canCreate ? <div style={{ padding: '9px', fontSize: 'var(--ui-text)', color: 'var(--ink-3)' }}>{emptyLabel}</div> : null}
      {canCreate ? (
        <div style={{ borderTop: list.length ? 'var(--border-hair-soft)' : 'none', marginTop: list.length ? '4px' : 0, paddingTop: list.length ? '4px' : 0 }}>
          <button type="button" role="option" aria-selected={active === list.length}
            onMouseDown={e => { e.preventDefault(); create(); }}
            onMouseEnter={() => setActive(list.length)}
            style={row(list.length, { color: 'var(--leather)', fontWeight: 500 })}>
            <i className="ti ti-plus" style={{ fontSize: '16px' }} />
            <span style={{ fontSize: 'var(--ui-text)', minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{createLabel(text)}</span>
            {active === -1 || active === list.length ? <span style={{ marginLeft: 'auto', fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--ink-3)', fontWeight: 400 }}>Enter</span> : null}
          </button>
        </div>
      ) : null}
    </div>
  ) : null;
  const menu = node ? portal(node, anchor.current && anchor.current.ownerDocument.body) : null;
  return { anchor, open, setOpen, onKey, menu };
}

export function Autocomplete({ value, onChange, onSelect, items = [], placeholder, icon = 'ti-search', emptyLabel, onCreate, createLabel, matchExact, name, invalid, disabled, id, style }) {
  const [focus, setFocus] = React.useState(false);
  const ac = useAcMenu({ items, query: value, emptyLabel, onCreate, createLabel, matchExact, disabled, onPick: it => onSelect && onSelect(it) });
  return (
    <div style={{ position: 'relative', ...style }}>
      <span ref={ac.anchor} style={{ position: 'relative', display: 'block' }}>
        <i className={'ti ' + icon} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', fontSize: '16px', color: 'var(--ink-3)', pointerEvents: 'none' }} />
        <input id={id} name={name} value={value || ''} disabled={disabled} placeholder={placeholder}
          role="combobox" aria-expanded={!!ac.menu} aria-autocomplete="list"
          onChange={e => { onChange && onChange(e.target.value); ac.setOpen(true); }}
          onKeyDown={ac.onKey}
          onFocus={() => { setFocus(true); ac.setOpen(true); }}
          onBlur={() => { setFocus(false); setTimeout(() => ac.setOpen(false), 120); }}
          style={{ ...controlStyle({ invalid, disabled, focus }), paddingLeft: '32px' }} />
      </span>
      {ac.menu}
    </div>
  );
}

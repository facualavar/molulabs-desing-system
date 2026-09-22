import React from 'react';
import { controlStyle } from './Field.jsx';

export function Autocomplete({ value, onChange, onSelect, items = [], placeholder, icon = 'ti-search', emptyLabel = 'Sin resultados', invalid, disabled, id, style }) {
  const [focus, setFocus] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const q = (value || '').toLowerCase();
  const list = q ? items.filter(it => (it.label + ' ' + (it.meta || '')).toLowerCase().includes(q)) : items;
  return (
    <div style={{ position: 'relative', ...style }}>
      <span style={{ position: 'relative', display: 'block' }}>
        <i className={'ti ' + icon} style={{
          position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)',
          fontSize: '16px', color: 'var(--ink-3)', pointerEvents: 'none'
        }} />
        <input id={id} value={value || ''} disabled={disabled} placeholder={placeholder}
          onChange={e => { onChange && onChange(e.target.value); setOpen(true); }}
          onFocus={() => { setFocus(true); setOpen(true); }}
          onBlur={() => { setFocus(false); setTimeout(() => setOpen(false), 120); }}
          style={{ ...controlStyle({ invalid, disabled, focus }), paddingLeft: '32px' }} />
      </span>
      {open && !disabled ? (
        <div style={{
          position: 'absolute', top: 'calc(100% + 4px)', left: 0, right: 0, zIndex: 30,
          background: 'var(--card)', border: 'var(--border-hair)', borderRadius: 'var(--r)',
          boxShadow: 'var(--shadow-menu)', padding: '4px', maxHeight: '240px', overflowY: 'auto'
        }}>
          {list.length ? list.map((it, i) => (
            <button key={i} type="button"
              onMouseDown={e => { e.preventDefault(); onSelect && onSelect(it); setOpen(false); }}
              style={{
                display: 'flex', alignItems: 'baseline', gap: '10px', width: '100%', textAlign: 'left',
                border: 0, background: 'transparent', borderRadius: 'var(--r-sm)', padding: '7px 9px'
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--page)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}>
              <span style={{ fontSize: 'var(--ui-text)' }}>{it.label}</span>
              {it.meta ? <span style={{ marginLeft: 'auto', fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--ink-3)' }}>{it.meta}</span> : null}
            </button>
          )) : (
            <div style={{ padding: '9px', fontSize: 'var(--ui-text)', color: 'var(--ink-3)' }}>{emptyLabel}</div>
          )}
        </div>
      ) : null}
    </div>
  );
}

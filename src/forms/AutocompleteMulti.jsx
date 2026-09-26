import React from 'react';
import { controlStyle } from './Field.jsx';
import { useAcMenu } from './Autocomplete.jsx';

const keyOf = it => String(it.value != null ? it.value : it.label);

export function AutocompleteMulti({ value = [], onChange, query: queryProp, onQueryChange, items = [], placeholder, icon = 'ti-search', emptyLabel, onCreate, createLabel, matchExact, max, name, invalid, disabled, id, style }) {
  const [focus, setFocus] = React.useState(false);
  const [own, setOwn] = React.useState('');
  const query = queryProp != null ? queryProp : own;
  const setQuery = t => { if (queryProp == null) setOwn(t); onQueryChange && onQueryChange(t); };
  const input = React.useRef(null);
  const keys = value.map(keyOf);
  const full = max != null && value.length >= max;
  const ac = useAcMenu({
    items: full ? [] : items.filter(it => !keys.includes(keyOf(it))), exclude: value, query,
    emptyLabel: full ? 'Máximo ' + max + ' seleccionados' : emptyLabel,
    onCreate: onCreate && !full ? t => { onCreate(t); setQuery(''); } : undefined,
    createLabel, matchExact, disabled, closeOnPick: false,
    onPick: it => { onChange && onChange([...value, it]); setQuery(''); }
  });
  const remove = it => onChange && onChange(value.filter(x => keyOf(x) !== keyOf(it)));
  const onKey = e => {
    if (e.key === 'Backspace' && !query && value.length) { remove(value[value.length - 1]); return; }
    ac.onKey(e);
  };
  return (
    <div style={{ position: 'relative', ...style }}>
      <div ref={ac.anchor} onMouseDown={e => { if (e.target === e.currentTarget) { e.preventDefault(); input.current && input.current.focus(); } }}
        style={{ ...controlStyle({ invalid, disabled, focus }), boxSizing: 'border-box', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '4px', paddingTop: '4px', paddingBottom: '4px', paddingLeft: '32px', position: 'relative', cursor: 'text' }}>
        <i className={'ti ' + icon} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', fontSize: '16px', color: 'var(--ink-3)', pointerEvents: 'none' }} />
        {value.map(it => (
          <span key={keyOf(it)} style={{
            display: 'inline-flex', alignItems: 'center', gap: '2px', maxWidth: '100%', boxSizing: 'border-box',
            background: 'var(--mut-bg)', border: 'var(--border-hair)', borderRadius: 'var(--r-sm)',
            padding: '1px 2px 1px 8px', fontSize: 'var(--ui-text-sm)', color: 'var(--ink)', lineHeight: 1.5
          }}>
            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{it.label}</span>
            {name ? <input type="hidden" name={name} value={keyOf(it)} /> : null}
            {!disabled ? <button type="button" aria-label={'Quitar ' + (typeof it.label === 'string' ? it.label : '')}
              onMouseDown={e => { e.preventDefault(); remove(it); }}
              style={{ border: 0, background: 'transparent', padding: '0 3px', cursor: 'pointer', color: 'var(--ink-3)', display: 'inline-flex', fontSize: '14px' }}>
              <i className="ti ti-x" />
            </button> : null}
          </span>
        ))}
        <input ref={input} id={id} value={query} disabled={disabled} placeholder={value.length ? '' : placeholder}
          role="combobox" aria-expanded={!!ac.menu} aria-autocomplete="list"
          onChange={e => { setQuery(e.target.value); ac.setOpen(true); }}
          onKeyDown={onKey}
          onFocus={() => { setFocus(true); ac.setOpen(true); }}
          onBlur={() => { setFocus(false); setTimeout(() => ac.setOpen(false), 120); }}
          style={{ flex: '1 1 80px', minWidth: 80, border: 0, outline: 'none', background: 'transparent', padding: '2px 0', font: 'inherit', color: 'var(--ink)' }} />
      </div>
      {ac.menu}
    </div>
  );
}

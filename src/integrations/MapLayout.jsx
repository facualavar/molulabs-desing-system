import React from 'react';
import { KeyValueList } from '../data/KeyValueList.jsx';

export function actionLinks(actions, keyPrefix = 'a') {
  return (actions || []).map((a, i) => {
    const icon = a.icon || (a.href ? 'ti-external-link' : null);
    const css = {
      display: 'inline-flex', alignItems: 'center', gap: '6px', padding: 0, border: 0, background: 'transparent',
      fontFamily: 'var(--sans)', fontSize: 'var(--text-base)', color: 'var(--ink-2)', textDecoration: 'none',
      cursor: 'pointer', textAlign: 'left'
    };
    const inner = <>{icon ? <i className={'ti ' + icon} aria-hidden="true" style={{ fontSize: '15px' }} /> : null}{a.label}</>;
    const hov = { onMouseEnter: e => { e.currentTarget.style.color = 'var(--ink)'; }, onMouseLeave: e => { e.currentTarget.style.color = 'var(--ink-2)'; } };
    return a.href
      ? <a key={keyPrefix + i} href={a.href} target="_blank" rel="noopener" onClick={a.onClick} style={css} {...hov}>{inner}</a>
      : <button key={keyPrefix + i} type="button" onClick={a.onClick} style={css} {...hov}>{inner}</button>;
  });
}

const chip = {
  position: 'absolute', top: 12, display: 'flex', alignItems: 'center', gap: '8px', zIndex: 2,
  background: '#fff', border: '1px solid var(--line)', borderRadius: 'var(--r)', boxShadow: 'var(--shadow-menu)'
};

function Row({ item, on, onPick, onKey, refFn }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button ref={refFn} type="button" aria-pressed={on} onClick={onPick} onKeyDown={onKey}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: '10px', width: '100%', padding: '10px 16px', flex: 'none',
        border: 0, borderBottom: '1px solid var(--line-soft)', textAlign: 'left', cursor: 'pointer',
        background: on ? 'color-mix(in oklch, var(--brand, var(--leather)) 12%, var(--card))' : hover ? 'var(--zebra)' : 'transparent',
        fontFamily: 'var(--sans)', color: 'var(--ink)'
      }}>
      <i className={'ti ' + (on ? 'ti-map-pin-filled' : 'ti-map-pin')} aria-hidden="true"
        style={{ fontSize: '16px', color: on ? 'var(--brand, var(--leather))' : 'var(--ink-3)' }} />
      <span style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '1px' }}>
        <span style={{ fontSize: 'var(--text-base)', fontWeight: on ? 600 : 400, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.label}</span>
        {item.meta != null ? <span style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-2)' }}>{item.meta}</span> : null}
      </span>
    </button>
  );
}

function SkeletonRow() {
  return (
    <div aria-hidden="true" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 16px', borderBottom: '1px solid var(--line-soft)' }}>
      <span style={{ width: 14, height: 14, borderRadius: '50%', background: 'var(--mut-bg)', flex: 'none' }} />
      <span style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <span style={{ height: 10, width: '62%', borderRadius: 3, background: 'var(--mut-bg)' }} />
        <span style={{ height: 8, width: '38%', borderRadius: 3, background: 'var(--mut-bg)' }} />
      </span>
    </div>
  );
}

export function MapLayout({
  children, items = [], selectedId, onSelect, info, actions, brandName, logo, brandIcon = 'ti-map',
  controls, empty, loading = false, listTitle = 'Ubicaciones', listHint = 'Elegí una para centrar el mapa',
  height = 560, style
}) {
  const controlled = selectedId !== undefined;
  const [inner, setInner] = React.useState(items.length ? items[0].id : undefined);
  const sel = controlled ? selectedId : inner;
  const box = React.useRef(null);
  const list = React.useRef(null);
  const rows = React.useRef({});
  const [narrow, setNarrow] = React.useState(false);

  React.useLayoutEffect(() => {
    const el = box.current;
    if (!el) return;
    const measure = () => setNarrow(el.getBoundingClientRect().width < 720);
    measure();
    if (typeof ResizeObserver === 'undefined') return;
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Keep the selected row visible inside the list (block: 'nearest') without scrolling the page.
  React.useEffect(() => {
    const l = list.current, r = rows.current[String(sel)];
    if (!l || !r) return;
    const top = r.offsetTop - l.offsetTop, bottom = top + r.offsetHeight;
    if (top < l.scrollTop) l.scrollTop = top;
    else if (bottom > l.scrollTop + l.clientHeight) l.scrollTop = bottom - l.clientHeight;
  }, [sel, items.length, narrow]);

  const pick = it => { if (!controlled) setInner(it.id); onSelect && onSelect(it.id, it); };
  const onKey = i => e => {
    const d = e.key === 'ArrowDown' ? 1 : e.key === 'ArrowUp' ? -1 : 0;
    if (!d) return;
    e.preventDefault();
    const next = items[Math.max(0, Math.min(items.length - 1, i + d))];
    const node = next && rows.current[String(next.id)];
    node && node.focus();
  };

  const h = typeof height === 'number' ? height + 'px' : height;
  const hasFoot = (info && info.length) || (actions && actions.length);

  return (
    <div ref={box} style={{
      display: 'grid', boxSizing: 'border-box', overflow: 'hidden',
      gridTemplateColumns: narrow ? 'minmax(0,1fr)' : 'minmax(0,1fr) 300px',
      gridTemplateRows: narrow ? '360px auto' : h, height: narrow ? 'auto' : h,
      border: '1px solid var(--line)', borderRadius: 'var(--r)', background: 'var(--card)',
      fontFamily: 'var(--sans)', color: 'var(--ink)', ...style
    }}>
      <div style={{ position: 'relative', minWidth: 0, background: 'var(--chrome)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>{children}</div>
        {brandName ? (
          <div style={{ ...chip, left: 12, padding: '6px 10px 6px 6px', color: 'var(--brand, var(--ink))', fontSize: 'var(--text-sm)', fontWeight: 600 }}>
            <span aria-hidden="true" style={{ width: 22, height: 22, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {logo ? <span style={{ width: 18, height: 18, display: 'flex' }}>{logo}</span> : <i className={'ti ' + brandIcon} style={{ fontSize: '16px' }} />}
            </span>
            <span>{brandName}</span>
          </div>
        ) : null}
        {controls ? <div style={{ ...chip, right: 12, padding: '4px' }}>{controls}</div> : null}
      </div>
      <aside style={{
        display: 'flex', flexDirection: 'column', minWidth: 0, minHeight: 0,
        borderLeft: narrow ? 'none' : '1px solid var(--line)', borderTop: narrow ? '1px solid var(--line)' : 'none'
      }}>
        <div style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)', display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <span style={{ fontSize: 'var(--text-md)', fontWeight: 600 }}>{listTitle}</span>
          {listHint ? <span style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-2)' }}>{listHint}</span> : null}
        </div>
        <div ref={list} role="list" aria-busy={loading || undefined} style={{
          flex: 1, minHeight: 0, overflowY: 'auto', display: 'flex', flexDirection: 'column',
          maxHeight: narrow ? 320 : 'none', position: 'relative'
        }}>
          {loading ? [0, 1, 2, 3].map(i => <SkeletonRow key={i} />)
            : items.length === 0 ? <div style={{ padding: '12px' }}>{empty ?? <span style={{ fontSize: 'var(--text-base)', color: 'var(--ink-2)' }}>Sin ubicaciones.</span>}</div>
            : items.map((it, i) => (
              <div role="listitem" key={String(it.id)} style={{ display: 'flex' }}>
                <Row item={it} on={String(it.id) === String(sel)} onPick={() => pick(it)} onKey={onKey(i)}
                  refFn={n => { rows.current[String(it.id)] = n; }} />
              </div>
            ))}
        </div>
        {hasFoot ? (
          <div style={{ padding: '12px 16px', borderTop: '1px solid var(--line)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {info && info.length ? <KeyValueList items={info} /> : null}
            {actions && actions.length ? <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '6px' }}>{actionLinks(actions)}</div> : null}
          </div>
        ) : null}
      </aside>
    </div>
  );
}

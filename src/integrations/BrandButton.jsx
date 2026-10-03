import React from 'react';

const SIZES = {
  md: { height: 40, padding: '0 16px 0 5px', fontSize: 'var(--text-md)', badge: 30, badgeMargin: 0, icon: 19, gap: 10 },
  sm: { padding: '8px 14px 8px 6px', fontSize: 'var(--text-base)', badge: 22, badgeMargin: '-3px 0', icon: 15, gap: 8 }
};

export function BrandButton({ label, icon = 'ti-world', logo, brandColor = '#1A73E8', variant = 'solid', size = 'md', href, onClick, disabled, style, children, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const solid = variant !== 'outline';
  const Tag = href && !disabled ? 'a' : 'button';
  const css = {
    '--brand': brandColor,
    display: 'inline-flex', alignItems: 'center', gap: s.gap + 'px', boxSizing: 'border-box',
    height: s.height, padding: s.padding, borderRadius: 'var(--r)',
    border: '1px solid ' + (solid ? 'var(--brand)' : 'var(--line)'),
    background: solid ? 'var(--brand)' : hover && !disabled ? 'var(--zebra)' : 'var(--card)',
    color: solid ? '#fff' : 'var(--brand)',
    fontFamily: 'var(--sans)', fontSize: s.fontSize, fontWeight: 'var(--weight-semibold)',
    textDecoration: 'none', whiteSpace: 'nowrap', cursor: disabled ? 'not-allowed' : 'pointer',
    filter: solid && hover && !disabled ? 'brightness(0.94)' : 'none',
    transform: press && !disabled ? 'translateY(1px)' : 'none',
    outline: focus ? '2px solid var(--focus-ring)' : 'none', outlineOffset: '2px',
    opacity: disabled ? .45 : 1,
    transition: 'background var(--dur-fast), filter var(--dur-fast)',
    ...style
  };
  return (
    <Tag {...rest}
      {...(Tag === 'a' ? { href, target: '_blank', rel: 'noopener' } : { type: rest.type || 'button', disabled })}
      aria-disabled={disabled || undefined}
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPress(false); }}
      onPointerDown={() => setPress(true)} onPointerUp={() => setPress(false)}
      onFocus={e => { let fv = true; try { fv = e.currentTarget.matches(':focus-visible'); } catch (_) {} setFocus(fv); }}
      onBlur={() => setFocus(false)}
      style={css}>
      <span aria-hidden="true" style={{
        width: s.badge, height: s.badge, margin: s.badgeMargin, flex: 'none', borderRadius: 'calc(var(--r) - 2px)',
        background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: solid ? 'none' : '0 0 0 1px rgba(0,0,0,.08)'
      }}>
        {logo ? <span style={{ width: Math.round(s.badge * .66), height: Math.round(s.badge * .66), display: 'flex' }}>{logo}</span>
          : <i className={'ti ' + icon} style={{ fontSize: s.icon + 'px', color: 'var(--brand)' }} />}
      </span>
      <span>{label ?? children}</span>
      {Tag === 'a' ? <i className="ti ti-external-link" aria-hidden="true" style={{ fontSize: size === 'sm' ? '13px' : '14px', opacity: .8, marginLeft: -2 }} /> : null}
    </Tag>
  );
}

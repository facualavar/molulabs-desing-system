import React from 'react';

const base = {
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '9px',
  fontFamily: 'var(--sans)', fontWeight: 'var(--weight-medium)', borderRadius: 'var(--r)',
  textDecoration: 'none', cursor: 'pointer', whiteSpace: 'nowrap', transition: 'background var(--dur-fast), border-color var(--dur-fast)'
};

const sizes = {
  md: { padding: 'var(--pad-button)', fontSize: 'var(--text-md)' },
  sm: { padding: 'var(--pad-button-sm)', fontSize: 'var(--text-base)' },
  lg: { padding: 'var(--pad-control)', fontSize: 'var(--ui-text-lg)', minHeight: 'var(--tap-min)' }
};

const tones = {
  primary:   { background: 'var(--chrome)', border: '1px solid var(--chrome)', color: '#fff' },
  secondary: { background: 'var(--card)', border: '1px solid var(--line)', color: 'var(--ink)', fontWeight: 'var(--weight-regular)' },
  ghost:     { background: 'transparent', border: '1px solid transparent', color: 'var(--ink-2)', fontWeight: 'var(--weight-regular)' },
  danger:    { background: 'var(--alert)', border: '1px solid var(--alert)', color: '#fff' }
};

const hovers = {
  primary: { background: 'var(--chrome-2)', borderColor: 'var(--chrome-2)' },
  secondary: { borderColor: 'var(--ink-3)' },
  ghost: { background: 'var(--page)', color: 'var(--ink)' },
  danger: { background: '#8C2219', borderColor: '#8C2219' }
};

export function Button({ tone = 'primary', size = 'md', icon, disabled, href, onClick, style, children, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const Tag = href ? 'a' : 'button';
  const css = {
    ...base, ...sizes[size] || sizes.md, ...tones[tone] || tones.primary,
    ...(hover && !disabled ? hovers[tone] || {} : {}),
    ...(disabled ? { opacity: .45, cursor: 'not-allowed' } : {}),
    ...style
  };
  return (
    <Tag href={href} onClick={disabled ? undefined : onClick} disabled={!href ? disabled : undefined}
      style={css} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} {...rest}>
      {icon ? <i className={'ti ' + icon} style={{ fontSize: size === 'sm' ? '17px' : size === 'lg' ? '20px' : '18px' }} /> : null}
      {children}
    </Tag>
  );
}

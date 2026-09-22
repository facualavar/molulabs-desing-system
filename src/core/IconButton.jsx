import React from 'react';

export function IconButton({ icon, label, on = 'light', size = 30, onClick, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const dark = on === 'chrome';
  return (
    <button aria-label={label} onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        flex: 'none', width: size, height: size, border: 0, borderRadius: 'var(--r-sm)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: Math.round(size * 0.56),
        background: hover ? (dark ? 'var(--chrome-2)' : 'var(--page)') : 'transparent',
        color: dark ? 'var(--chrome-ink)' : hover ? 'var(--ink)' : 'var(--ink-3)',
        ...style
      }} {...rest}>
      <i className={'ti ' + icon} />
    </button>
  );
}

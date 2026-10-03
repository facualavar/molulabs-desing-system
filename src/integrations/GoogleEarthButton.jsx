import React from 'react';
import { BrandButton } from './BrandButton.jsx';

export function SatelliteIcon({ size = '100%', style }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true" focusable="false" style={{ display: 'block', ...style }}>
      <circle cx="11" cy="13" r="8" fill="#1A73E8" />
      <path d="M5.2 9.5c2 .3 3 1.6 2.6 3.2-.3 1.3.8 2 2 2.3 1.1.3 1.3 1.6.6 3.3M13.5 5.4c-.6 1.4.2 2.6 1.7 2.8 1.6.2 2.2 1.4 1.6 2.8-.4 1 .2 1.9 1.4 2.2" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity=".9" />
      <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(-28 12 12)" stroke="#1A73E8" strokeWidth="1.3" opacity=".55" />
      <circle cx="20.6" cy="5.6" r="2.1" fill="#1A73E8" stroke="#fff" strokeWidth="1.2" />
    </svg>
  );
}

export function googleEarthUrl({ lat, lng, altitude = 800, distance = 2500, tilt = 45, heading = 0 }) {
  return 'https://earth.google.com/web/@' + lat + ',' + lng + ',' + altitude + 'a,' + distance + 'd,35y,' + heading + 'h,' + tilt + 't,0r';
}

export function GoogleEarthButton({ variant = 'solid', size = 'md', href, onClick, disabled, style, ...rest }) {
  return (
    <BrandButton {...rest} label="Ver en Google Earth" logo={<SatelliteIcon />} brandColor="#1A73E8"
      variant={variant} size={size} href={href} onClick={onClick} disabled={disabled} style={style} />
  );
}

import * as React from 'react';

export interface GoogleEarthButtonProps extends React.ButtonHTMLAttributes<HTMLElement> {
  /** Default "solid". */
  variant?: 'solid' | 'outline';
  /** Default "md". "sm" inside TableToolbar actions. */
  size?: 'md' | 'sm';
  /** Opens Google Earth in a new tab — build it with googleEarthUrl(). */
  href?: string;
  /** Use instead of href to open the in-app map screen. */
  onClick?: React.MouseEventHandler<HTMLElement>;
  disabled?: boolean;
  style?: React.CSSProperties;
}
/**
 * BrandButton preset: "Ver en Google Earth", satellite logo inline, brand #1A73E8.
 * Only the action is configurable.
 */
export declare function GoogleEarthButton(props: GoogleEarthButtonProps): React.JSX.Element;

export interface SatelliteIconProps {
  /** px or CSS length. Default "100%" (fills its box). */
  size?: number | string;
  style?: React.CSSProperties;
}
/** The system's own satellite-view mark (globe + orbit), inline SVG. Use as `logo` in BrandButton / MapLayout. */
export declare function SatelliteIcon(props: SatelliteIconProps): React.JSX.Element;

export interface GoogleEarthUrlOptions {
  lat: number;
  lng: number;
  /** Ground altitude in meters. Default 800. */
  altitude?: number;
  /** Camera distance in meters. Default 2500. */
  distance?: number;
  /** Camera tilt in degrees (0 = straight down). Default 45. */
  tilt?: number;
  /** Compass heading in degrees. Default 0. */
  heading?: number;
}
/**
 * Pure: builds the Google Earth web link for a point.
 * googleEarthUrl({ lat: -24.3857, lng: -65.2672 })
 * → 'https://earth.google.com/web/@-24.3857,-65.2672,800a,2500d,35y,0h,45t,0r'
 */
export declare function googleEarthUrl(options: GoogleEarthUrlOptions): string;

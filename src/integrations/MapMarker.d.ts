import * as React from 'react';

export interface MapMarkerProps {
  /** Pin color: default = --chrome, ok = --ok, warn = --warn-2, alert = --alert. Default "default". */
  tone?: 'default' | 'ok' | 'warn' | 'alert';
  /** One size step larger, --leather fill, white halo. Reads on satellite imagery. */
  selected?: boolean;
  /** Accessible name — goes to title and aria-label. */
  label?: string;
  /** Cluster: draws a --chrome circle with the number (mono) instead of the pin. */
  count?: number;
  style?: React.CSSProperties;
}
/**
 * The system's map pin. Self-contained, no positioning of its own; the anchor point is the
 * center of the bottom edge — use it as the content of a Google Maps AdvancedMarkerElement.
 */
export declare function MapMarker(props: MapMarkerProps): React.JSX.Element;

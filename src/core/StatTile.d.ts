import * as React from 'react';

/**
 * A single KPI figure. Lay several out in a grid of repeat(auto-fit, minmax(250px, 1fr)).
 */
export interface StatTileProps {
  label: React.ReactNode;
  /** The figure — set in IBM Plex Mono and never wrapped. */
  value: React.ReactNode;
  detail?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function StatTile(props: StatTileProps): React.JSX.Element;

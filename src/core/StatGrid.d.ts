import * as React from 'react';
import { StatTileProps } from './StatTile';

export interface StatGridProps {
  /** StatTile props, one per tile. Takes precedence over children. */
  items?: StatTileProps[];
  /** Custom tiles (StatTile or anything of the same height). Used when items is not set. */
  children?: React.ReactNode;
  /** Min tile width in px before wrapping. Default 250. */
  min?: number;
  style?: React.CSSProperties;
}
/** The repeat(auto-fit, minmax(250px, 1fr)) grid of StatTile — Inicio, list headers, fichas. 2–4 tiles. */
export declare function StatGrid(props: StatGridProps): React.JSX.Element;

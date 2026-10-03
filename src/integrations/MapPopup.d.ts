import * as React from 'react';
import { KeyValueItem } from '../data/KeyValueList';
import { MapAction } from './MapLayout';

export interface MapPopupProps {
  title: React.ReactNode;
  /** Mono line under the title — documento, coordenadas. */
  sub?: React.ReactNode;
  /** Compact KeyValueList rows (4px, --text-sm). */
  items?: KeyValueItem[];
  /** Same link style as MapLayout actions. */
  actions?: MapAction[];
  style?: React.CSSProperties;
}
/**
 * Content of the bubble opened by clicking a marker. No border, shadow or background — the
 * Google InfoWindow draws the bubble and the ✕. Max width 260px.
 */
export declare function MapPopup(props: MapPopupProps): React.JSX.Element;

import * as React from 'react';
import { KeyValueItem } from '../data/KeyValueList';

export interface MapLayoutItem {
  id: string | number;
  label: React.ReactNode;
  /** Second line: cultivo · superficie, departamento… */
  meta?: React.ReactNode;
}

export interface MapAction {
  label: React.ReactNode;
  /** Tabler icon. Defaults to "ti-external-link" when href is set. */
  icon?: string;
  /** Opens in a new tab. */
  href?: string;
  onClick?: () => void;
}

export interface MapLayoutProps {
  /** The real map (Google Maps, Mapbox, an image) — fills the left panel edge to edge. The component never loads a map. */
  children?: React.ReactNode;
  items?: MapLayoutItem[];
  /** Controlled selection. Omit to let the component keep it (starts on the first item). */
  selectedId?: string | number;
  onSelect?: (id: string | number, item: MapLayoutItem) => void;
  /** KeyValueList items under the list — centro, superficie. */
  info?: KeyValueItem[];
  /** Links under info — "Abrir en Google Earth 3D". */
  actions?: MapAction[];
  /** Brand badge over the map, top-left. Hidden when empty. */
  brandName?: React.ReactNode;
  /** Brand mark element (inline SVG / <img>), e.g. <SatelliteIcon />. */
  logo?: React.ReactNode;
  /** Tabler icon used in the badge when there is no logo. Default "ti-map". */
  brandIcon?: string;
  /** Over the map, top-right, same badge treatment — e.g. a SegmentedControl "2D / 3D". */
  controls?: React.ReactNode;
  /** Shown in the list when items is empty — pass a small EmptyState. */
  empty?: React.ReactNode;
  /** List shows 4 skeleton rows. */
  loading?: boolean;
  /** Default "Ubicaciones". */
  listTitle?: React.ReactNode;
  /** Default "Elegí una para centrar el mapa". */
  listHint?: React.ReactNode;
  /** Wide layout height. Default 560. Under 720px wide the list moves under a 360px map. */
  height?: number | string;
  style?: React.CSSProperties;
}
/**
 * Frame of a map screen: map left (slot), list of locations right, info + links at the foot.
 * Set --brand in style to tint the selected pin and the badge text.
 */
export declare function MapLayout(props: MapLayoutProps): React.JSX.Element;

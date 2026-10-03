import * as React from 'react';

export interface TableToolbarProps {
  /**
   * Left side: any controls — TextInput, Autocomplete, Select, DateRange, FilterBar, SegmentedControl.
   * Pass them as a fragment; each child becomes a grid cell that wraps on narrow screens.
   */
  filters?: React.ReactNode;
  /** Right side: page actions — Exportar (secondary), Nuevo registro (primary). Wraps below filters when narrow. */
  actions?: React.ReactNode;
  /** Number of selected rows. When > 0, filters are replaced by "N seleccionados" and actions by selectionActions. */
  selection?: number;
  /** Bulk actions shown while selection > 0 — Exportar, Asignar, Eliminar (danger). */
  selectionActions?: React.ReactNode;
  /** Shows a ✕ before the count that clears the selection. */
  onClearSelection?: () => void;
  /**
   * Where the selection bar appears. 'inline' (default): replaces filters/actions in place.
   * 'floating': filters and actions stay; a bar with the count and selectionActions floats centered at the
   * bottom of the viewport (portal, follows theme/density), wherever the table is. Esc clears the selection.
   */
  selectionPlacement?: 'inline' | 'floating';
  /** Min width in px of each filter cell before wrapping. Default 180. */
  filtersMin?: number;
  style?: React.CSSProperties;
}
/**
 * The bar above a table: filters left, actions right. Place it above the Card that holds the DataTable
 * (or inside the Card header area). Layout only — it doesn't know what the filters are.
 */
export declare function TableToolbar(props: TableToolbarProps): React.JSX.Element;

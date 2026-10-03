import * as React from 'react';

export interface DataColumn {
  label: React.ReactNode;
  /** "right" for money, quantities and states. Right-aligned cells never wrap. */
  align?: 'left' | 'right' | 'center';
  /** Render the column in IBM Plex Mono — codes, CUITs, dates, amounts. */
  mono?: boolean;
  /** Secondary descriptive column, set in --ink-2. */
  muted?: boolean;
  /**
   * Tabler icon shown before the cell value (or alone, if the cell is empty/null), colored by row.tone.
   * A function picks the icon per row: r => r.tone === 'alert' ? 'ti-alert-octagon' : 'ti-circle-check'.
   */
  icon?: string | ((row: DataRow) => string | null);
}

export interface DataRow {
  /** Stable key for selection. Default: row index (breaks when filtering/paginating — set it). */
  id?: string | number;
  /** false = checkbox disabled for this row (already censado, locked). Excluded from "seleccionar todas" and Shift ranges. */
  selectable?: boolean;
  /** Color for icon columns: ok, warn, alert (= bad), mut, info. Default mut. */
  tone?: 'ok' | 'warn' | 'alert' | 'bad' | 'mut' | 'info';
  /**
   * One entry per column: any node (text, Tag, Button, fragment), or a plain { value, sub } object for a two-line cell.
   * React elements are always rendered as nodes, never read as descriptors.
   */
  cells: Array<React.ReactNode | { value: React.ReactNode; sub?: React.ReactNode }>;
}

/**
 * The workhorse: one table per screen, inside a Card with pad={false}.
 */
export interface DataTableProps {
  columns: DataColumn[];
  rows: DataRow[];
  /** Makes rows clickable — use it to open a detail sheet. */
  onRowClick?: (row: DataRow, index: number) => void;
  /** Muted left-hand note in the footer strip. */
  footer?: React.ReactNode;
  /** Right-hand total, monospaced. */
  footerTotal?: React.ReactNode;
  /** Shown instead of the table when rows is empty — pass an <EmptyState>. */
  empty?: React.ReactNode;
  /**
   * Adds a checkbox column for bulk actions. Header checkbox selects/clears all visible rows (shows "–" when partial);
   * Shift+click selects a range. Clicking the checkbox doesn't trigger onRowClick. Pair with TableToolbar selection.
   */
  selectable?: boolean;
  /** Selected row ids (row.id ?? index). Ids not in rows are kept (selection survives filters and pages). */
  selected?: Array<string | number>;
  onSelectedChange?: (ids: Array<string | number>) => void;
  /** 'single' = one row at a time (radio; click again to clear), no header checkbox. Default 'multiple'. */
  selectionMode?: 'single' | 'multiple';
  /** Show the header "seleccionar todas" checkbox (multiple only). Default true. */
  selectAll?: boolean;
}

export declare function DataTable(props: DataTableProps): React.JSX.Element;

import * as React from 'react';

export interface DataColumn {
  label: React.ReactNode;
  /** "right" for money, quantities and states. Right-aligned cells never wrap. */
  align?: 'left' | 'right' | 'center';
  /** Render the column in IBM Plex Mono — codes, CUITs, dates, amounts. */
  mono?: boolean;
  /** Secondary descriptive column, set in --ink-2. */
  muted?: boolean;
}

export interface DataRow {
  /** One entry per column: a node, or { value, sub } for a two-line cell. */
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
}

export declare function DataTable(props: DataTableProps): React.JSX.Element;

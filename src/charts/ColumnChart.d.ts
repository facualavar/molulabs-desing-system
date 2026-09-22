import * as React from 'react';

export interface ColumnItem {
  /** X axis tick — short by construction ('Ene', 'S 38', '+90 d'). */
  label: React.ReactNode;
  value: number;
  /** Formatted figure used in the hover title. */
  display?: React.ReactNode;
  /** Semantic colour when the column means a state. Defaults to chrome. */
  tone?: 'ok' | 'warn' | 'alert' | 'leather' | 'chrome';
}

/**
 * Vertical columns with X and Y axes — the only chart in this system that draws axes, because
 * an ordered X axis (months, weeks, aging buckets) needs them to be read. For a ranking of
 * client or product names use BarChart instead: those labels do not fit under a column.
 */
export interface ColumnChartProps {
  items: ColumnItem[];
  /** Scale ceiling. Defaults to a rounded value above the peak. */
  max?: number;
  /** Target number of Y gridlines. Default 4; the real count is rounded to a nice step. */
  ticks?: number;
  /** Plot height in px. Default 168. */
  height?: number;
  tone?: 'chrome' | 'leather';
  /** Formats the Y axis ticks, e.g. `v => (v / 1e6) + 'M'`. */
  formatY?: (value: number) => React.ReactNode;
  style?: React.CSSProperties;
}
export declare function ColumnChart(props: ColumnChartProps): React.JSX.Element;

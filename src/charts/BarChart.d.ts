import * as React from 'react';

export interface BarItem {
  label: React.ReactNode;
  value: number;
  /** Formatted figure for the right column — pass it whenever the raw number needs currency or units. */
  display?: React.ReactNode;
  /** Semantic colour when the bar means a state: 'alert', 'ok', 'warn', 'leather'. Defaults to chrome. */
  tone?: 'ok' | 'warn' | 'alert' | 'leather' | 'chrome';
}

/**
 * Horizontal bar summary. Bars are horizontal because the labels are client and product
 * names that do not fit rotated. No axes and no gridlines — the table underneath is the
 * precise source; the bars only rank.
 */
export interface BarChartProps {
  items: BarItem[];
  /** Scale ceiling. Defaults to the largest value. Set it to compare two charts on one scale. */
  max?: number;
  tone?: 'chrome' | 'leather';
  showTrack?: boolean;
  /** Cap on the label column so one long name cannot starve the bars. Default '26ch'. */
  labelMax?: string;
  style?: React.CSSProperties;
}
export declare function BarChart(props: BarChartProps): React.JSX.Element;

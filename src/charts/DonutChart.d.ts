import * as React from 'react';

export interface DonutSegment {
  label: React.ReactNode;
  value: number;
  display?: React.ReactNode;
  /** The system has four semantic colours and no categorical palette — segments must BE states.
   *  Fills come from the chart ramp (`warn` paints `--warn-2`, `mut` paints `--mut-2`), because
   *  the text-weight tones share nearly one luminosity and merge in adjacent arcs. */
  tone?: 'ok' | 'warn' | 'alert' | 'mut' | 'chrome' | 'leather';
}

/**
 * Donut (never a full pie) with the total in the middle. Use it only when the segments are
 * states — emitidas / borradores / anuladas. With more than four segments, or with categories
 * that carry no state meaning, use BarChart instead: the donut starts needing colours the
 * brand does not have.
 */
export interface DonutChartProps {
  segments: DonutSegment[];
  /** Pre-formatted total for the centre, e.g. '$ 18.402.100'. */
  total?: React.ReactNode;
  totalLabel?: React.ReactNode;
  /** Ring diameter in px. Default 112 — sized so donut + legend fit one column of a two-up grid. */
  size?: number;
  thickness?: number;
  /** Separation between arcs, in percent of the ring. Default 1.1; set 0 for a continuous ring. */
  gap?: number;
  style?: React.CSSProperties;
}
export declare function DonutChart(props: DonutChartProps): React.JSX.Element;

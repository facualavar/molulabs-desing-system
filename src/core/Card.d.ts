import * as React from 'react';

/**
 * The white hairline surface everything sits on. No shadow — elevation is reserved for overlays.
 */
export interface CardProps {
  title?: React.ReactNode;
  /** Muted count or timeframe beside the title. */
  meta?: React.ReactNode;
  /** Set false when the body is a full-bleed table. Default true. */
  pad?: boolean;
  actions?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function Card(props: CardProps): React.JSX.Element;

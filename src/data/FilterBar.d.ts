import * as React from 'react';

/**
 * The row of segment filters above a list — period, state, sede.
 */
export interface FilterBarProps {
  /** Short labels: "Hoy", "Semana", "Pendientes". */
  filters: string[];
  /** Index of the active filter. Default 0. */
  value?: number;
  onChange?: (index: number, label: string) => void;
  /** Right-aligned actions (export, new record). */
  actions?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function FilterBar(props: FilterBarProps): React.JSX.Element;

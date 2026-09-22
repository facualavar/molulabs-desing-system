import * as React from 'react';

/**
 * A date, set in mono. Values are ISO in state and dd/mm/aaaa on display.
 */
export interface DateInputProps {
  value?: string;
  onChange?: (value: string) => void;
  invalid?: boolean;
  disabled?: boolean;
  id?: string;
  style?: React.CSSProperties;
}

export declare function DateInput(props: DateInputProps): React.JSX.Element;

/** Two dates joined by "a" — the period filter used across reports and lists. */
export interface DateRangeProps {
  from?: string; to?: string;
  onFrom?: (v: string) => void; onTo?: (v: string) => void;
  style?: React.CSSProperties;
}
export declare function DateRange(props: DateRangeProps): React.JSX.Element;

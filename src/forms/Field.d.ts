import * as React from 'react';

/**
 * Label + control + hint/error wrapper. Every form control in the system sits in one.
 */
export interface FieldProps {
  label?: React.ReactNode;
  /** Muted helper line — units, format, where the value comes from. */
  hint?: React.ReactNode;
  /** Replaces the hint and turns the control's border red. */
  error?: React.ReactNode;
  required?: boolean;
  htmlFor?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function Field(props: FieldProps): React.JSX.Element;

/** The shared box styling for custom controls — use it if you build one. */
export declare function controlStyle(o?: {
  invalid?: boolean; disabled?: boolean; mono?: boolean;
  align?: 'left' | 'right'; focus?: boolean; readOnly?: boolean;
}): React.CSSProperties;

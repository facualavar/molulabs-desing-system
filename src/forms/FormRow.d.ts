import * as React from 'react';

/**
 * Fluid field row — fields wrap instead of shrinking past legibility.
 */
export interface FormRowProps {
  /** Kept for readability; the grid is auto-fit and ignores it. */
  cols?: number;
  /** Minimum field width before wrapping. Default 220. */
  min?: number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function FormRow(props: FormRowProps): React.JSX.Element;

export interface FormActionsProps {
  /** Muted consequence line on the left, e.g. "Al confirmar se descuenta stock." */
  note?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
/** The footer of a form: hairline rule, note left, primary action last on the right. */
export declare function FormActions(props: FormActionsProps): React.JSX.Element;

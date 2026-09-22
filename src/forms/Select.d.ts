import * as React from 'react';

/**
 * Closed list on a native <select> — sede, depósito, condición IVA, punto de venta.
 */
export interface SelectProps {
  value?: string;
  onChange?: (value: string) => void;
  /** Strings, or { value, label } pairs. */
  options?: Array<string | { value: string; label: string }>;
  /** Empty first option, e.g. "Elegir sede". */
  placeholder?: string;
  invalid?: boolean;
  disabled?: boolean;
  id?: string;
  style?: React.CSSProperties;
}

export declare function Select(props: SelectProps): React.JSX.Element;

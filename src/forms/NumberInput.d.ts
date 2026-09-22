import * as React from 'react';

/**
 * Quantities, weights and money — always mono and right-aligned, so a column of inputs
 * lines up with the table it will become.
 */
export interface NumberInputProps {
  value?: string | number;
  onChange?: (value: string) => void;
  /** Trailing unit inside the field: "kg", "u.", "%", "bolsas". */
  unit?: string;
  /** Leading symbol inside the field, normally "$". */
  prefix?: string;
  invalid?: boolean;
  disabled?: boolean;
  id?: string;
  step?: number | string;
  style?: React.CSSProperties;
}

export declare function NumberInput(props: NumberInputProps): React.JSX.Element;

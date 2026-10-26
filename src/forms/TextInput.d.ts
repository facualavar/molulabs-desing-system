import * as React from 'react';

/**
 * Single-line text. Codes, CUITs and comprobante numbers take mono.
 * Any other native input prop (name, onBlur, autoComplete, maxLength, data-*) reaches the <input>.
 */
export interface TextInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'style'> {
  value?: string;
  /** The text; the event comes second, for form libraries that read name/value from it (Formik's handleChange). */
  onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  /** IBM Plex Mono — use for CUIT, codes, comprobante numbers, patentes. */
  mono?: boolean;
  align?: 'left' | 'right';
  /** Tabler icon class rendered inside the left edge, e.g. "ti-search". */
  icon?: string;
  invalid?: boolean;
  disabled?: boolean;
  id?: string;
  type?: string;
  style?: React.CSSProperties;
}

export declare function TextInput(props: TextInputProps): React.JSX.Element;

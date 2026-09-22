import * as React from 'react';

/**
 * Single-line text. Codes, CUITs and comprobante numbers take mono.
 */
export interface TextInputProps {
  value?: string;
  onChange?: (value: string) => void;
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

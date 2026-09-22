import * as React from 'react';

export interface AutocompleteItem {
  label: React.ReactNode;
  /** Right-aligned mono detail — CUIT, código de producto, número de socio. */
  meta?: string;
  [key: string]: any;
}

/**
 * Type-ahead over a long list — personas del padrón, productos del catálogo, lotes.
 */
export interface AutocompleteProps {
  value?: string;
  onChange?: (value: string) => void;
  onSelect?: (item: AutocompleteItem) => void;
  items?: AutocompleteItem[];
  placeholder?: string;
  /** Tabler icon inside the field. Default "ti-search". */
  icon?: string;
  emptyLabel?: string;
  invalid?: boolean;
  disabled?: boolean;
  id?: string;
  style?: React.CSSProperties;
}

export declare function Autocomplete(props: AutocompleteProps): React.JSX.Element;

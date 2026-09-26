import * as React from 'react';

export interface AutocompleteItem {
  label: React.ReactNode;
  /** Right-aligned mono detail — CUIT, código de producto, número de socio. */
  meta?: string;
  [key: string]: any;
}

/**
 * Type-ahead over a long list — personas del padrón, productos del catálogo, lotes.
 * The list renders in a layer over the whole page (portal to <body>, position fixed, z 80), so it is never
 * clipped by a Card, Modal body or scrolling table; it follows the field on scroll and opens upward near the bottom.
 * Keyboard: ↑/↓ highlight, Enter selects the highlighted option (or creates, see onCreate), Esc closes.
 * Filtering ignores case and accents. For several picks use AutocompleteMulti.
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
  /**
   * Enables creating a record. When defined, a "Crear «text»" row appears at the end of the list whenever
   * the typed text has no exact match. Receives the trimmed text. Enter with no option highlighted also calls it.
   */
  onCreate?: (text: string) => void;
  /** Label for the create row. Default t => 'Crear «' + t + '»'. */
  createLabel?: (text: string) => React.ReactNode;
  /** Exact-match test that hides the create row. Default: label equals text ignoring case and accents. */
  matchExact?: (item: AutocompleteItem, text: string) => boolean;
  /** Sent with native form submission (the typed text). */
  name?: string;
  invalid?: boolean;
  disabled?: boolean;
  id?: string;
  style?: React.CSSProperties;
}

export declare function Autocomplete(props: AutocompleteProps): React.JSX.Element;

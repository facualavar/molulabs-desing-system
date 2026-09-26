import * as React from 'react';
import { AutocompleteItem } from './Autocomplete';

export interface AutocompleteMultiProps {
  /** Picked items. Identity = item.value ?? item.label. */
  value?: AutocompleteItem[];
  onChange?: (items: AutocompleteItem[]) => void;
  /** Search text. Optional — uncontrolled if omitted. Clears after each pick. */
  query?: string;
  onQueryChange?: (text: string) => void;
  /** Catalog to search. Already-picked items are hidden from the list. */
  items?: AutocompleteItem[];
  placeholder?: string;
  /** Tabler icon inside the field. Default "ti-search". */
  icon?: string;
  emptyLabel?: string;
  /**
   * Enables creating. A "Crear «text»" row appears when the text matches no item in the catalog nor in value.
   * Add the new item to value (and to items) yourself.
   */
  onCreate?: (text: string) => void;
  /** Default t => 'Crear «' + t + '»'. */
  createLabel?: (text: string) => React.ReactNode;
  /** Default: label equals text ignoring case and accents. */
  matchExact?: (item: AutocompleteItem, text: string) => boolean;
  /** Max picks; at the limit the list shows "Máximo N seleccionados" and create is disabled. */
  max?: number;
  /** One hidden input per picked item (value = item.value ?? item.label). */
  name?: string;
  invalid?: boolean;
  disabled?: boolean;
  id?: string;
  style?: React.CSSProperties;
}
/**
 * Pick several records from a long or open catalog — razas, cultivos, productos. Picked items show as removable
 * chips inside the field; the list stays open after each pick; Backspace on empty text removes the last chip.
 * Same menu, keyboard and create row as Autocomplete. For fewer than ~10 fixed options use MultiChoice.
 */
export declare function AutocompleteMulti(props: AutocompleteMultiProps): React.JSX.Element;

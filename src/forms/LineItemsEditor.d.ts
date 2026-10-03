import * as React from 'react';

export interface LineItem {
  /** Stable key; also used to hide the product from the catalog once added. Default: label. */
  id?: string | number;
  label: React.ReactNode;
  /** Second line: presentación, código. */
  sub?: React.ReactNode;
  /** Shown inside the quantity field: "bolsas", "kg", "cabezas". */
  unit?: string;
  /** Quantity as typed (string, es-AR decimals with comma). */
  qty?: string;
  /** Unit price as typed. Ignored when showPrice={false}. */
  price?: string;
  /** Available stock. qty > max marks the quantity invalid with "Supera el stock (N)" below it. */
  max?: number;
}
export interface LineItemsEditorProps {
  lines?: LineItem[];
  /** Every edit, add and remove returns the whole new array. */
  onChange?: (lines: LineItem[]) => void;
  /** Products to add from the footer Autocomplete. Already-added ones are hidden. New lines start at qty "1". */
  catalog?: LineItem[];
  /** false for remitos: no price, no subtotal, no total. Default true. */
  showPrice?: boolean;
  /** Total in the footer (with showPrice). Default true. */
  showTotal?: boolean;
  /** Default "$". */
  currency?: string;
  addPlaceholder?: string;
  emptyLabel?: string;
  /** Read-only: no inputs editable, no add, no remove. */
  disabled?: boolean;
  style?: React.CSSProperties;
}
/**
 * Renglones of a venta, pedido or remito: product, quantity (+ unit), price, mono subtotal, remove; add from catalog
 * at the foot. Use inside a Card pad={false}. Put the totals block (KeyValueList with emphasis) below it.
 */
export declare function LineItemsEditor(props: LineItemsEditorProps): React.JSX.Element;

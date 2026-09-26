import * as React from 'react';

export interface RowAction {
  label?: React.ReactNode;
  /** Tabler icon class, e.g. "ti-edit". */
  icon?: string;
  onClick?: () => void;
  /** Destructive — red, placed last after a divider; confirm it with Dialog. */
  tone?: 'danger';
  disabled?: boolean;
  /** Renders a separator instead of an item. */
  divider?: boolean;
}
export interface RowActionsProps {
  actions: RowAction[];
  /** Accessible label of the ⋮ trigger. Default "Acciones". */
  label?: string;
  style?: React.CSSProperties;
}
/**
 * ⋮ menu in the last column of a DataTable — any table whose rows have more than one action.
 * Stops the click so it never triggers onRowClick. With a single action, use a Button size="sm" instead.
 */
export declare function RowActions(props: RowActionsProps): React.JSX.Element;

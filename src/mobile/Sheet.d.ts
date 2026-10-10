import * as React from 'react';

/** Bottom sheet — mobile's Dialog and row-action menu. Needs a position:relative host. */
export interface SheetProps {
  open: boolean;
  title?: React.ReactNode;
  sub?: React.ReactNode;
  onClose?: () => void;
  /** Stacked full-width buttons pinned under the content. */
  actions?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Sheet(props: SheetProps): React.JSX.Element | null;

export interface SheetActionProps {
  icon?: string;
  label: React.ReactNode;
  meta?: React.ReactNode;
  tone?: 'default' | 'danger';
  onClick?: () => void;
}
export declare function SheetAction(props: SheetActionProps): React.JSX.Element;

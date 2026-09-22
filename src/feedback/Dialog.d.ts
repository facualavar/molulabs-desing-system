import * as React from 'react';

/**
 * Confirmation before an irreversible operation (emitir comprobante, cerrar inventario, anular).
 */
export interface DialogProps {
  open?: boolean;
  title: React.ReactNode;
  /** The operation restated with its real figures. */
  children?: React.ReactNode;
  /** Muted consequence line, e.g. "Solo se puede anular con nota de crédito." */
  note?: React.ReactNode;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  /** "danger" turns the confirm button red. Default "primary". */
  tone?: 'primary' | 'danger';
  /** Scrim becomes `position: absolute` so the dialog stays inside a `position: relative`
   *  host — required inside a phone frame, same rule as Sheet. */
  contained?: boolean;
}

export declare function Dialog(props: DialogProps): React.JSX.Element | null;

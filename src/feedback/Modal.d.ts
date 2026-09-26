import * as React from 'react';

export interface ModalProps {
  open: boolean;
  /** Called on Esc, scrim click, the ✕ button, or browser Back. */
  onClose?: () => void;
  /** sm 440 · md 640 · lg 880 px — capped to the viewport. Default "md". */
  size?: 'sm' | 'md' | 'lg';
  /** false = no ✕, no Esc, no scrim close (use sparingly — prefer Dialog for blocking). Default true. */
  dismissible?: boolean;
  /** Push a history entry so browser Back closes the modal instead of leaving the page. Default true. */
  closeOnBack?: boolean;
  /** Position inside the nearest positioned parent (phone frames, cards). Disables closeOnBack. */
  contained?: boolean;
  /** id of the ModalHeader title, for aria-labelledby. */
  labelledBy?: string;
  children?: React.ReactNode;
}
/**
 * Task in a layer over the page — a detail, a short form, a picker.
 * Never persists: open state lives in memory, so a reload lands on the page with it closed,
 * and Back closes it. For irreversible confirmations use Dialog.
 */
export declare function Modal(props: ModalProps): React.JSX.Element | null;

export interface ModalHeaderProps { title: React.ReactNode; subtitle?: React.ReactNode; id?: string; children?: React.ReactNode }
/** Title, optional subtitle, and the ✕ when the modal is dismissible. */
export declare function ModalHeader(props: ModalHeaderProps): React.JSX.Element;

export interface ModalBodyProps { children?: React.ReactNode; style?: React.CSSProperties }
/** Scrolls on its own — header and footer stay fixed. */
export declare function ModalBody(props: ModalBodyProps): React.JSX.Element;

export interface ModalFooterProps { note?: React.ReactNode; children?: React.ReactNode }
/** Muted note left, actions right; primary action last. */
export declare function ModalFooter(props: ModalFooterProps): React.JSX.Element;

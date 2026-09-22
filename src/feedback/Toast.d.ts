import * as React from 'react';

/**
 * Transient confirmation or failure, stacked bottom-right over the app.
 */
export interface ToastProps {
  /** Default "info". danger stays ~9s on screen, the rest ~5s. */
  tone?: 'info' | 'success' | 'warning' | 'danger';
  title: React.ReactNode;
  /** Body line — one sentence with the concrete figures. */
  children?: React.ReactNode;
  /** Optional single action label, e.g. "Reintentar". */
  action?: string;
  onAction?: () => void;
  onClose?: () => void;
  style?: React.CSSProperties;
}

export declare function Toast(props: ToastProps): React.JSX.Element;

/** Fixed bottom-right container; render Toasts as children, newest last. */
export interface ToastStackProps { children?: React.ReactNode; style?: React.CSSProperties }
export declare function ToastStack(props: ToastStackProps): React.JSX.Element;

/** Icon, colours and tint per tone — shared with any toast renderer that wants the same look. */
export declare const TOAST_TONES: Record<'info' | 'success' | 'warning' | 'danger',
  { icon: string; color: string; bar: string; bg: string; ink: string }>;

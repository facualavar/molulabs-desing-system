import * as React from 'react';

export type ToastTone = 'info' | 'success' | 'warning' | 'danger';
export interface ToastAction {
  label: string;
  onClick?: () => void;
  /** Close the toast after onClick. Default true. */
  dismiss?: boolean;
  /** Override this toast's auto-close in ms (Infinity = stays until closed). */
  duration?: number;
}
export interface ToastsApi {
  /** Shows a toast and returns its id. Auto-closes after 5 s (9 s for danger); hover/focus pauses the countdown. */
  push: (tone: ToastTone, title: React.ReactNode, msg?: React.ReactNode, action?: ToastAction) => string;
  dismiss: (id: string) => void;
  clear: () => void;
}
export interface ToastProviderProps {
  children?: React.ReactNode;
  /** Max toasts on screen; the oldest leaves first. Default 4. */
  max?: number;
  /** Auto-close in ms. Default 5000. */
  duration?: number;
  /** Auto-close in ms for danger. Default 9000. */
  dangerDuration?: number;
  stackStyle?: React.CSSProperties;
}
/**
 * Wrap the app once. Owns the toast queue, timers and the ToastStack — screens just call push().
 * Read the API with useToasts() (also available as ToastProvider.useToasts from the bundle namespace).
 */
export declare function ToastProvider(props: ToastProviderProps): React.JSX.Element;
export declare namespace ToastProvider { const useToasts: () => ToastsApi; }
/** Throws if there is no ToastProvider above. */
export declare function useToasts(): ToastsApi;

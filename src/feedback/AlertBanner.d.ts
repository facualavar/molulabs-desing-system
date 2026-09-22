import * as React from 'react';

/**
 * A standing condition the operator must resolve — sits at the top of a screen and stays until fixed.
 */
export interface AlertBannerProps {
  /** Default "danger". */
  tone?: 'danger' | 'warning' | 'success' | 'info';
  /** Tabler icon class; each tone has a sensible default. */
  icon?: string;
  title: React.ReactNode;
  children?: React.ReactNode;
  /** One action, phrased as the way out ("Abrir bandeja"). */
  action?: string;
  onAction?: () => void;
  style?: React.CSSProperties;
}

export declare function AlertBanner(props: AlertBannerProps): React.JSX.Element;

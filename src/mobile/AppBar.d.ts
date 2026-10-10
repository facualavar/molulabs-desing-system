import * as React from 'react';

/** Top bar for a mobile screen: title, optional back affordance and icon actions. */
export interface AppBarProps {
  title: React.ReactNode;
  /** Second line — record identity or status, never marketing copy. */
  sub?: React.ReactNode;
  /** Shows the back chevron when provided. */
  onBack?: () => void;
  backLabel?: string;
  /** AppBarAction elements. */
  actions?: React.ReactNode;
  /** 'chrome' = the green field (default); 'paper' = white bar on scrolled content. */
  tone?: 'chrome' | 'paper';
  style?: React.CSSProperties;
}
export declare function AppBar(props: AppBarProps): React.JSX.Element;

export interface AppBarActionProps {
  /** Tabler icon class, e.g. 'ti-search'. */
  icon: string;
  /** Accessible label — icon-only buttons must have one. */
  label: string;
  onClick?: () => void;
  tone?: 'chrome' | 'paper';
  badge?: number | string;
}
export declare function AppBarAction(props: AppBarActionProps): React.JSX.Element;

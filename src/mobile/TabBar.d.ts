import * as React from 'react';

export interface TabBarItem {
  key: string;
  label: string;
  /** Tabler icon class, e.g. 'ti-clipboard-list'. */
  icon: string;
  badge?: number | string;
}

/**
 * Bottom tab bar for mobile: 3–5 top-level destinations, 44px minimum tap target.
 */
export interface TabBarProps {
  items: TabBarItem[];
  current: string;
  onNavigate?: (key: string) => void;
  style?: React.CSSProperties;
}
export declare function TabBar(props: TabBarProps): React.JSX.Element;

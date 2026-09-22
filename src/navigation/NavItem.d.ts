import * as React from 'react';

/** One row of the SideNav. The active row is filled with --chrome-2 and carries a leather inset bar on its left edge. */
export interface NavItemProps {
  icon: string;
  label: React.ReactNode;
  badge?: string | number;
  active?: boolean;
  onClick?: () => void;
}

export declare function NavItem(props: NavItemProps): React.JSX.Element;

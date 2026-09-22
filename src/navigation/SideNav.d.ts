import * as React from 'react';

export interface NavEntry {
  key: string;
  label: string;
  /** Tabler icon class. */
  icon: string;
  /** Small red count, e.g. comprobantes in the queue. */
  badge?: string | number;
}

export interface NavSection {
  /** Muted section head — "Comercial", "Stock", "Catálogo", "Padrón". Omit for the top item. */
  label?: string;
  /** Draw a hairline above this section instead of a label. */
  rule?: boolean;
  items: NavEntry[];
}

/**
 * The persistent green navigation field — the app's only chrome; there is no top bar.
 */
export interface SideNavProps {
  brand?: string;
  sub?: string;
  initials?: string;
  sections: NavSection[];
  /** key of the active entry. */
  current?: string;
  onNavigate?: (key: string) => void;
  user?: { name: string; role: string; initials: string };
  style?: React.CSSProperties;
}

export declare function SideNav(props: SideNavProps): React.JSX.Element;

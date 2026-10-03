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

export interface UserAction {
  key: string;
  label: string;
  /** Tabler icon class. */
  icon?: string;
  /** Hairline above this item — use before "Cerrar sesión". */
  divider?: boolean;
  /** Red label + icon, for destructive actions. */
  danger?: boolean;
  onClick?: () => void;
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
  /** Items of the (···) menu in the user footer. Defaults: Configurar mi usuario, Cambiar contraseña, Cerrar sesión. Pass [] to hide the button. */
  userActions?: UserAction[];
  /** Called with the action key when any user-menu item is picked. */
  onUserAction?: (key: string) => void;
  style?: React.CSSProperties;
}

/** Default items of the user menu: Configurar mi usuario, Cambiar contraseña, Cerrar sesión. */
export declare const DEFAULT_USER_ACTIONS: UserAction[];

export declare function SideNav(props: SideNavProps): React.JSX.Element;

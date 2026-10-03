import * as React from 'react';

export interface SettingsItem {
  id?: string | number;
  /** Tabler class, shown in --leather. Default "ti-settings". */
  icon?: string;
  title: React.ReactNode;
  /** What it configures, or its current value: "3 sucursales · Central por defecto". */
  detail?: React.ReactNode;
  /** Right-hand control. Default: secondary Button "Abrir" calling onClick. Pass a Switch, a Tag, or null for none. */
  action?: React.ReactNode;
  /** Label of the default button. Default "Abrir". */
  actionLabel?: string;
  onClick?: () => void;
}
export interface SettingsListProps {
  items?: SettingsItem[];
  style?: React.CSSProperties;
}
/** Settings rows in Configuración. Same row structure as TaskList. Use inside Card pad={false}, one Card per group. */
export declare function SettingsList(props: SettingsListProps): React.JSX.Element;

import * as React from 'react';

export interface TaskItem {
  id?: string | number;
  /** Icon color: alert = blocks work (red), warn = needs action soon (amber), mut = informative. Default "mut". */
  tone?: 'alert' | 'warn' | 'mut';
  /** Tabler class, e.g. "ti-file-alert". Default "ti-alert-circle". */
  icon?: string;
  title: React.ReactNode;
  /** One line with the concrete figure: "3 remitos sin facturar · $ 2.140.000". */
  detail?: React.ReactNode;
  /** Optional mono note on the right: a date, a count. */
  meta?: React.ReactNode;
  /** Makes the row a button with hover and a chevron. */
  onClick?: () => void;
}
export interface TaskListProps {
  items?: TaskItem[];
  /** Shown when items is empty — pass an <EmptyState> ("Nada pendiente"). */
  empty?: React.ReactNode;
  style?: React.CSSProperties;
}
/** "Requiere atención" on Inicio. Rows separated by a hairline, --zebra hover. Use inside Card pad={false}. Order by tone: alert first. */
export declare function TaskList(props: TaskListProps): React.JSX.Element;

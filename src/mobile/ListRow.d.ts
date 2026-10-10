import * as React from 'react';

/** One record per row — the mobile substitute for a DataTable row. */
export interface ListRowProps {
  title: React.ReactNode;
  /** Secondary line: date, document number, counterparty. */
  meta?: React.ReactNode;
  /** Right-aligned figure, set in the mono face with tabular numbers. */
  value?: React.ReactNode;
  valueMeta?: React.ReactNode;
  /** Tabler icon class for the leading tile. */
  icon?: string;
  /** A <Tag> rendered next to the title. */
  tag?: React.ReactNode;
  /** Defaults to true when there is no `value`, false when there is. */
  chevron?: boolean;
  onClick?: () => void;
  /** Set on the first row of a group to drop its top rule. */
  first?: boolean;
  style?: React.CSSProperties;
}
export declare function ListRow(props: ListRowProps): React.JSX.Element;

export interface ListGroupProps {
  label?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function ListGroup(props: ListGroupProps): React.JSX.Element;

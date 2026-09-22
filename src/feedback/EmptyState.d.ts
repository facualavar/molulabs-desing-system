import * as React from 'react';

/**
 * What a list shows before there is data — or when filters exclude everything.
 */
export interface EmptyStateProps {
  /** Tabler icon class. Default "ti-inbox". */
  icon?: string;
  title: React.ReactNode;
  /** Explain both why it is empty and what would fill it. */
  children?: React.ReactNode;
  actions?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function EmptyState(props: EmptyStateProps): React.JSX.Element;

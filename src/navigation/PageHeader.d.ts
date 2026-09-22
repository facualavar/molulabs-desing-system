import * as React from 'react';

/**
 * The title block at the top of the content area — this system has no top bar, so this is the only page furniture.
 */
export interface PageHeaderProps {
  title: React.ReactNode;
  /** Label of the back link on detail screens, e.g. "Personas". */
  back?: string;
  onBack?: () => void;
  /** State pills describing the record. */
  tags?: React.ReactNode;
  actions?: React.ReactNode;
  sub?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function PageHeader(props: PageHeaderProps): React.JSX.Element;

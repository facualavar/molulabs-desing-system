import * as React from 'react';

/**
 * Service health read-out — a colored dot, the thing, its current value.
 */
export interface StatusItem {
  label: React.ReactNode;
  value: React.ReactNode;
  tone?: 'ok' | 'warn' | 'bad' | 'mut';
  mono?: boolean;
}

export interface StatusListProps { items: StatusItem[]; style?: React.CSSProperties }

export declare function StatusList(props: StatusListProps): React.JSX.Element;

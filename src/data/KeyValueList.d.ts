import * as React from 'react';

/**
 * Field/value pairs in a detail sheet or a totals block.
 */
export interface KeyValueItem {
  k: React.ReactNode;
  v: React.ReactNode;
  /** Set the value in mono — CUITs, amounts, dates, codes. */
  mono?: boolean;
}

export interface KeyValueListProps {
  items: KeyValueItem[];
  style?: React.CSSProperties;
}

export declare function KeyValueList(props: KeyValueListProps): React.JSX.Element;

import * as React from 'react';

export interface FeatureItem {
  /** Tabler icon class, e.g. 'ti-plug-connected'. */
  icon?: string;
  title: React.ReactNode;
  body: React.ReactNode;
  /** Mono footnote — a figure or a stack name. */
  meta?: React.ReactNode;
}

/** Capability cards under a Section header. */
export interface FeatureGridProps {
  items: FeatureItem[];
  /** Advisory; the grid auto-fits at 240px minimum. */
  columns?: number;
  /** Match the parent Section's tone so the cards sit on the right ground. */
  tone?: 'card' | 'chrome';
  style?: React.CSSProperties;
}
export declare function FeatureGrid(props: FeatureGridProps): React.JSX.Element;

import * as React from 'react';

/** Closing band with one decision. */
export interface CTAProps {
  title: React.ReactNode;
  lead?: React.ReactNode;
  actions?: React.ReactNode;
  note?: React.ReactNode;
  /** 'leather' (default) is reserved for this band — the only large leather field in the system. */
  tone?: 'leather' | 'chrome';
  style?: React.CSSProperties;
}
export declare function CTA(props: CTAProps): React.JSX.Element;

import * as React from 'react';

/** A full-bleed landing band with a contained header and free content below. */
export interface SectionProps {
  /** The ground. Alternate paper/card; chrome and the status tints are accents, one each per page. */
  tone?: 'paper' | 'card' | 'chrome' | 'ok' | 'warn';
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  lead?: React.ReactNode;
  actions?: React.ReactNode;
  align?: 'left' | 'center';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Section(props: SectionProps): React.JSX.Element;

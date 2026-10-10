import * as React from 'react';

export interface FooterColumn {
  label: React.ReactNode;
  links: Array<{ label: React.ReactNode; href?: string }>;
}

/** Site footer on the chrome field. The brand is set in type — there is no logo file in this system. */
export interface FooterProps {
  brand?: React.ReactNode;
  tagline?: React.ReactNode;
  columns?: FooterColumn[];
  legal?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Footer(props: FooterProps): React.JSX.Element;

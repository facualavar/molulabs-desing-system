import * as React from 'react';

export interface SectionHeaderProps {
  title: React.ReactNode;
  /** One line on what the section asks for or where the data comes from. */
  description?: React.ReactNode;
  /** Optional section number, rendered "01", "02"… in mono. */
  index?: number;
  /** Right-aligned small actions, e.g. "Copiar del domicilio fiscal". */
  actions?: React.ReactNode;
  /** First section of the form — drops the top rule and spacing. */
  first?: boolean;
  style?: React.CSSProperties;
}
/** Titles a group of fields inside one form: hairline above, title, muted description. */
export declare function SectionHeader(props: SectionHeaderProps): React.JSX.Element;

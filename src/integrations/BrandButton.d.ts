import * as React from 'react';

/**
 * Button that opens an external service in its own brand color (Google Earth, WhatsApp, Mercado Pago…).
 * The logo sits on a white badge so any brand mark reads on any brand color.
 */
export interface BrandButtonProps extends React.ButtonHTMLAttributes<HTMLElement> {
  /** Text, e.g. "Ver en Google Earth". Falls back to children. */
  label?: React.ReactNode;
  /** Tabler icon class used when there is no logo. Default "ti-world". */
  icon?: string;
  /** Brand mark: an <img> or inline SVG element. Never a path to an asset. */
  logo?: React.ReactNode;
  /** Brand hex. Sets --brand. Default "#1A73E8". */
  brandColor?: string;
  /** "solid": brand fill, white text. "outline": card fill, brand text. Default "solid". */
  variant?: 'solid' | 'outline';
  /** "md" = 40px, for detail cards. "sm" = same height as <Button size="sm">, for TableToolbar actions. Default "md". */
  size?: 'md' | 'sm';
  /** Renders <a target="_blank" rel="noopener"> with a small external-link icon after the text. */
  href?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export declare function BrandButton(props: BrandButtonProps): React.JSX.Element;

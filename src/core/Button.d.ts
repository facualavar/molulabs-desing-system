import * as React from 'react';

/**
 * The system's action. Solid green chrome is the single primary action per view;
 * everything else is the hairline secondary.
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLElement> {
  /** Visual weight. Default "primary". */
  tone?: 'primary' | 'secondary' | 'ghost' | 'danger';
  /** "md" for page actions, "sm" inside detail sheets and toolbars. Default "md". */
  size?: 'md' | 'sm' | 'lg';
  /** Tabler icon class, e.g. "ti-plus". */
  icon?: string;
  disabled?: boolean;
  /** Renders an <a> instead of a <button>. */
  href?: string;
  children?: React.ReactNode;
}

export declare function Button(props: ButtonProps): React.JSX.Element;

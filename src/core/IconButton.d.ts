import * as React from 'react';

/** A borderless square icon action — row overflow menus, toast dismiss, nav account menu. */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Tabler icon class, e.g. "ti-dots". */
  icon: string;
  /** Accessible label — required, the button has no text. */
  label: string;
  /** Which ground it sits on. Default "light". */
  on?: 'light' | 'chrome';
  /** Square size in px. Default 30. */
  size?: number;
}

export declare function IconButton(props: IconButtonProps): React.JSX.Element;

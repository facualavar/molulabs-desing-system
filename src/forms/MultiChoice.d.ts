import * as React from 'react';

export interface MultiChoiceOption {
  value: string;
  label: React.ReactNode;
  hint?: React.ReactNode;
  /** "Ninguno" / "No recibe": selecting it clears the rest, and vice versa. */
  exclusive?: boolean;
}
export interface MultiChoiceProps {
  /** Selected values. [] = sin responder. */
  value?: string[];
  onChange?: (value: string[]) => void;
  options?: Array<string | MultiChoiceOption>;
  /** Sent with native form submission (one checkbox per option, same name). */
  name?: string;
  /**
   * 'tiles' (default): bordered tiles in a grid, supports `hint` — forms with room, answers that need a description.
   * 'chips': compact pill toggles that wrap inline — short labels, dense backoffice forms, mobile.
   * 'list': one bordered list, one row per option, exclusive option set apart at the bottom, selection count below — long labels, narrow columns, mobile.
   */
  variant?: 'tiles' | 'chips' | 'list';
  /** Min tile width in px before wrapping (tiles only). Default 180. */
  min?: number;
  /** Max selectable (exclusive options excluded from the count). */
  max?: number;
  disabled?: boolean;
  /** Red border — required question left unanswered. */
  invalid?: boolean;
  style?: React.CSSProperties;
}
/**
 * "Marcá todas las que correspondan": a multi-select question in a saved form
 * (Asesoramiento técnico, Asociativismo, destinos de producción). Options are tiles
 * in a responsive grid; an `exclusive` option ("Ninguno") is mutually exclusive with the rest.
 * Use Checkbox for a single yes/no acceptance; Autocomplete multi for 10+ options.
 */
export declare function MultiChoice(props: MultiChoiceProps): React.JSX.Element;

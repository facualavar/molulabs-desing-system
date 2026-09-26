import * as React from 'react';

export interface SegmentOption { value: string | boolean; label: React.ReactNode }
export interface SegmentedControlProps {
  /** undefined/null = sin responder (ninguna opción marcada). */
  value?: string | boolean | null;
  onChange?: (value: any) => void;
  /** 2–4 short options. Defaults to ['Sí', 'No']. */
  options?: Array<string | SegmentOption>;
  /** Sent with native form submission (radio group). */
  name?: string;
  disabled?: boolean;
  /** Red border — e.g. required question left unanswered. */
  invalid?: boolean;
  style?: React.CSSProperties;
}
/**
 * Short choice with every option visible: Sí/No questions in a form that is saved,
 * Día/Semana/Mes, Activo/Inactivo. Starts unanswered unless a value is given.
 * Use Switch for settings that apply instantly; RadioGroup when options need a hint.
 */
export declare function SegmentedControl(props: SegmentedControlProps): React.JSX.Element;

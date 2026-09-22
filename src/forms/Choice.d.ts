import * as React from 'react';

/**
 * Checkbox, radio group and switch — all three fill with --chrome when on.
 */
export interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: React.ReactNode;
  /** Consequence of ticking it, e.g. "Descuenta stock al confirmar". */
  hint?: React.ReactNode;
  disabled?: boolean;
  style?: React.CSSProperties;
}
export declare function Checkbox(props: CheckboxProps): React.JSX.Element;

export interface RadioOption { value: string; label: React.ReactNode; hint?: React.ReactNode }
export interface RadioGroupProps {
  value?: string;
  onChange?: (value: string) => void;
  options?: Array<string | RadioOption>;
  name?: string;
  style?: React.CSSProperties;
}
/** 2–4 mutually exclusive options that each need explaining (tipo de comprobante, condición de pago). */
export declare function RadioGroup(props: RadioGroupProps): React.JSX.Element;

export interface SwitchProps extends CheckboxProps {}
/** A setting that takes effect immediately — Configuración only, never inside a form being submitted. */
export declare function Switch(props: SwitchProps): React.JSX.Element;

export interface ChoiceProps extends CheckboxProps, RadioGroupProps {
  /** Which control to render. Defaults to 'checkbox'. */
  type?: 'checkbox' | 'radio' | 'switch';
}
/** Dispatcher over Checkbox / RadioGroup / Switch — use the named control directly when the type is fixed. */
export declare function Choice(props: ChoiceProps): React.JSX.Element;

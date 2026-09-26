import * as React from 'react';

export interface Step {
  label: React.ReactNode;
  /** Override the derived state — normally only 'error' after a failed Siguiente. */
  status?: 'todo' | 'current' | 'done' | 'error';
}
export interface StepperProps {
  steps: Step[];
  /** Index of the step on screen. Earlier steps read as done, later as todo. */
  current?: number;
  /** Makes done/error steps clickable to jump back. */
  onStep?: (index: number) => void;
  /** "Paso 2 de 4" + progress bar — mobile / narrow panels. */
  compact?: boolean;
  style?: React.CSSProperties;
}
/** Progress through a multi-step form. Used inside Wizard; usable alone above any paged flow. */
export declare function Stepper(props: StepperProps): React.JSX.Element;

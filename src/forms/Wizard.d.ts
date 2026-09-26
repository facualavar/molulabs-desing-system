import * as React from 'react';
import { Step } from './Stepper';

export interface WizardProps {
  /** Visible steps only — filter out conditional steps before passing. */
  steps: Step[];
  current: number;
  /** Jump back to a done/error step from the Stepper. */
  onStep?: (index: number) => void;
  onBack?: () => void;
  /** Validate here; don't advance if the step is invalid (mark it status:'error'). */
  onNext?: () => void;
  /** Shows "Guardar borrador" on every step but the last. */
  onDraft?: () => void;
  onFinish?: () => void;
  finishLabel?: string;
  nextLabel?: string;
  /** Muted line left of the actions — consequence of confirming, validation summary. */
  note?: React.ReactNode;
  /** Fallback line, e.g. "Borrador guardado 10:42". */
  draftNote?: React.ReactNode;
  busy?: boolean;
  /** Compact stepper (mobile). */
  compact?: boolean;
  /** Content of the current step. Last step should be a read-only summary. */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
/** Long form split into steps — censos, altas, declaraciones. Controlled: the screen owns step + data. */
export declare function Wizard(props: WizardProps): React.JSX.Element;

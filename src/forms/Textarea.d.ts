import * as React from 'react';

/**
 * Free notes — observaciones on a remito, motivo de anulación. Keep it to 3 rows by default.
 * Any other native textarea prop (name, onBlur, maxLength, data-*) reaches the <textarea>.
 */
export interface TextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'value' | 'onChange' | 'style'> {
  value?: string;
  /** The text; the event comes second, for form libraries that read name/value from it (Formik's handleChange). */
  onChange?: (value: string, event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
  invalid?: boolean;
  disabled?: boolean;
  id?: string;
  style?: React.CSSProperties;
}

export declare function Textarea(props: TextareaProps): React.JSX.Element;

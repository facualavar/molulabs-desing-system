import * as React from 'react';

/** Free notes — observaciones on a remito, motivo de anulación. Keep it to 3 rows by default. */
export interface TextareaProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  rows?: number;
  invalid?: boolean;
  disabled?: boolean;
  id?: string;
  style?: React.CSSProperties;
}

export declare function Textarea(props: TextareaProps): React.JSX.Element;

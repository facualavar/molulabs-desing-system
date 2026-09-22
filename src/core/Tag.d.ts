import * as React from 'react';

/**
 * The state pill — every row status in the system reads as one of four tones.
 */
export interface TagProps {
  /** ok = autorizado/activo, warn = en cola/bloqueado, bad = rechazado/vencido, mut = neutral. Default "mut". */
  tone?: 'ok' | 'warn' | 'bad' | 'mut';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function Tag(props: TagProps): React.JSX.Element;

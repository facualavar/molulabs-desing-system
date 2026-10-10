import * as React from 'react';

/**
 * A file as FileInput shows it. A native File works as-is; add progress/error while the app uploads it,
 * or pass plain objects for files already on the server.
 */
export interface FileInputItem {
  name: string;
  /** Bytes. */
  size?: number;
  type?: string;
  /** 0–100 while uploading: shows "Subiendo… n%" and a bar under the row. */
  progress?: number;
  /** Upload failed: red row with this message. */
  error?: string;
}

/**
 * Drop zone + list of chosen files, for a Field. It never uploads: it hands File objects to onChange
 * and the app sends them. Files that fail accept/maxSize are rejected with an inline message.
 */
export interface FileInputProps {
  /** Current files. */
  value?: (File | FileInputItem)[];
  onChange?: (files: (File | FileInputItem)[]) => void;
  /** Same syntax as <input accept>: ".pdf,image/*". Also feeds the auto hint ("PDF, IMAGE · hasta 5 MB"). */
  accept?: string;
  /** Allow several files. Without it the drop zone hides once one file is chosen. */
  multiple?: boolean;
  /** Bytes. Larger files are rejected. */
  maxSize?: number;
  /** With multiple: cap on the list; the drop zone hides when reached. */
  maxFiles?: number;
  /** Drop-zone text. Default "Arrastrá un archivo o hacé clic para elegir". */
  label?: React.ReactNode;
  /** Second line in the drop zone. Defaults to accepted types + max size. */
  hint?: React.ReactNode;
  invalid?: boolean;
  disabled?: boolean;
  /** Goes on the hidden <input type="file"> — pair with Field htmlFor. */
  id?: string;
  /** One-line drop zone (control height) for dense forms. */
  compact?: boolean;
  style?: React.CSSProperties;
}

export declare function FileInput(props: FileInputProps): JSX.Element;

/** "820 KB", "2,4 MB". */
export declare function formatBytes(bytes: number): string;

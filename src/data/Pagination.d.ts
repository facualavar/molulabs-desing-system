import * as React from 'react';

export interface PaginationProps {
  /** 1-based current page. */
  page: number;
  pageSize?: number;
  /** Total records across all pages. */
  total: number;
  onPage?: (page: number) => void;
  /** e.g. [20, 50, 100] — shows the "Filas" selector when paired with onPageSize. */
  pageSizes?: number[];
  onPageSize?: (size: number) => void;
  style?: React.CSSProperties;
}
/**
 * Pager under a DataTable, inside the same Card: "21–40 de 1.284" left, pages right.
 * Collapses to 1 … 4 5 6 … 65 past seven pages.
 */
export declare function Pagination(props: PaginationProps): React.JSX.Element;

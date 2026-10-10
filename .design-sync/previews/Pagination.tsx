import { useState } from 'react';
import { Pagination } from '@molulabs/ds';

export const Default = () => {
  const [page, setPage] = useState(2);
  return <Pagination page={page} pageSize={20} total={84} onPage={setPage} />;
};

export const ManyPages = () => {
  const [page, setPage] = useState(5);
  const [size, setSize] = useState(20);
  return <Pagination page={page} pageSize={size} total={1284} onPage={setPage} pageSizes={[20, 50, 100]} onPageSize={setSize} />;
};

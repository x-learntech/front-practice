/**
 * hideActions: ["CSB","EXTERNAL"]
 */
import React from 'react';
import { Pagination } from '@vv-desktop-web-core/atoms';

const Basic = () => {
  const [pagination, setPagination] = React.useState({ current: 1, pageSize: 10 });
  const handlePaginationChange = value => {
    setPagination({ ...pagination, ...value });
  };
  return (
    <>
      <Pagination total={122} {...pagination} onChange={handlePaginationChange} />
    </>
  );
};

export default Basic;

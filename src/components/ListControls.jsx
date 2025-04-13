import React from 'react';
import RepositoryListItem from './RepositoryListItem';
import { List, Pagination } from '@mui/material';

export default function ListControls({
  controls,
  currentPageItems,
  sortedItems,
  itemsPerPage,
  page,
  setPage,
  pagination,
}) {
  return (
    <>
      <div className="flex justify-between w-full">{controls}</div>
      {currentPageItems.length > 0 && (
        <List className="flex flex-col gap-2 w-full">
          {currentPageItems.map((repo) => (
            <RepositoryListItem key={repo.id} repo={repo} />
          ))}
        </List>
      )}
      {pagination && (
        <Pagination
          count={Math.ceil(sortedItems.length / itemsPerPage)}
          page={page}
          onChange={(event, value) => setPage(value)}
          color="primary"
        />
      )}
    </>
  );
}

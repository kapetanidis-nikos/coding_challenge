import React from 'react';
import { List, Pagination } from '@mui/material';
import LoadingLine from './LoadingLine';
import RepositoryItem from './RepositoryItem';
import { blue } from '@mui/material/colors';

export default function ListControls({
  controls = null,
  currentPageItems = null,
  sortedItems = null,
  itemsPerPage = null,
  page = null,
  setPage = null,
  pagination = null,
}) {
  return (
    <div className="w-full">
      <div className="flex mb-6 gap-4 justify-between w-full">{controls}</div>
      {currentPageItems.length > 0 ? (
        <List className="flex flex-col gap-2 w-full">
          {currentPageItems.map((repo) => (
            <RepositoryItem key={repo.id} repo={repo} />
          ))}
        </List>
      ) : (
        Array.from({ length: itemsPerPage }).map((_, index) => <LoadingLine key={index} index={index} />)
      )}
      {pagination && (
        <div className="flex justify-center mt-4">
          <Pagination
            count={Math.ceil(sortedItems.length / itemsPerPage)}
            page={page}
            onChange={(event, value) => setPage(value)}
            color="primary"
            sx={{
              '& .Mui-selected': {
                backgroundColor: blue[300],
                '&:hover': {
                  backgroundColor: blue[500],
                },
              },
            }}
          />
        </div>
      )}
    </div>
  );
}

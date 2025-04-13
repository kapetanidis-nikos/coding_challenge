import React, { useState } from 'react';
import { List } from '@mui/material';
import RepositoryListItem from './RepositoryListItem';
import LoadingLine from './LoadingLine';
import Button from '@mui/material/Button';

export default function PopularRepositories({ items }) {
  const [showAllPopular, setShowAllPopular] = useState(false);
  const [itemsPerPage] = useState(5);

  const popularRepos = items.filter((repo) => repo.stargazers_count > 1000);
  const displayedPopularRepos = showAllPopular ? popularRepos : popularRepos.slice(0, itemsPerPage);

  return (
    <div className="w-full">
      <div className="flex justify-between">
        <h2>Popular Repositories</h2>
        <Button onClick={() => setShowAllPopular((prevState) => !prevState)} variant="text" size="small">
          {showAllPopular ? 'Show Less' : 'Show More'}
        </Button>
      </div>
      {popularRepos.length > 0 ? (
        <List className="flex flex-col gap-2">
          {displayedPopularRepos.map((repo) => (
            <RepositoryListItem key={repo.id} repo={repo} />
          ))}
        </List>
      ) : (
        Array.from({ length: itemsPerPage }).map((_, index) => <LoadingLine key={index} index={index} />)
      )}
    </div>
  );
}

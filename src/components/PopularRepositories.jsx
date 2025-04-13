import React, { useState } from 'react';
import { List } from '@mui/material';
import RepositoryListItem from './RepositoryListItem';
export default function PopularRepositories({ items }) {
  const [showAllPopular, setShowAllPopular] = useState(false);

  const popularRepos = items.filter((repo) => repo.stargazers_count > 1000);
  const displayedPopularRepos = showAllPopular
    ? popularRepos
    : popularRepos.slice(0, 5);

  return (
    <>
      {popularRepos.length > 0 && (
        <div className="w-full mb-6">
          <h2 className="text-lg font-semibold mb-2">Popular Repositories</h2>
          <List className="flex flex-col gap-2">
            {displayedPopularRepos.map((repo) => (
              <RepositoryListItem key={repo.id} repo={repo} />
            ))}
          </List>
          {popularRepos.length > 5 && (
            <button
              onClick={() => setShowAllPopular((prevState) => !prevState)}
              className="text-sm text-blue-400 mt-2 hover:underline"
            >
              {showAllPopular ? 'Show Less' : 'Show More'}
            </button>
          )}
        </div>
      )}
    </>
  );
}

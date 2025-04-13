import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ListControls from './ListControls';

export default function PopularRepositories({ items }) {
  const [showAllPopular, setShowAllPopular] = useState(false);
  const [itemsPerPage] = useState(5);

  const popularRepos = items.filter((repo) => repo.stargazers_count > 1000);
  const displayedPopularRepos = showAllPopular ? popularRepos : popularRepos.slice(0, itemsPerPage);

  const controls = (
    <Button onClick={() => setShowAllPopular((prevState) => !prevState)} variant="text" size="small">
      {showAllPopular ? 'Show Less' : 'Show More'}
    </Button>
  );
  return <ListControls controls={controls} pagination={false} currentPageItems={displayedPopularRepos} />;
}

import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';
import ListControls from './ListControls';

export default function PopularRepositories({ items }) {
  const [showAllPopular, setShowAllPopular] = useState(false);
  const [itemsPerPage] = useState(5);

  const popularRepos = items.filter((repo) => repo.stargazers_count > 1000);
  const displayedPopularRepos = showAllPopular ? popularRepos : popularRepos.slice(0, itemsPerPage);

  const controls = (
    <Button
      onClick={() => setShowAllPopular((prevState) => !prevState)}
      sx={{
        backgroundColor: grey[50],
        color: 'black',
        textTransform: 'none',
        fontSize: '16px',
        pl: 2,
        pr: 2,
      }}
      variant="text"
      size="small"
    >
      {showAllPopular ? 'Show Less' : 'Show More'}
    </Button>
  );
  return (
    <ListControls
      controls={controls}
      pagination={false}
      itemsPerPage={itemsPerPage}
      currentPageItems={displayedPopularRepos}
    />
  );
}

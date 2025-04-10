import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRepositories } from './store/repositoryActions';
import CircularProgress from '@mui/material/CircularProgress';
import { List, Pagination } from '@mui/material';
import RepositoryListItem from './components/RepositoryListItem';

function App() {
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRepositories({ perPage: 10 }));
  }, [dispatch]);

  const { items, loading, error } = useSelector((state) => state.repository);

  // Calculate the index range for the current page
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageItems = items.slice(startIndex, endIndex);

  return (
    <>
      <div className="text-red-400">code_challenge</div>
      {loading && <CircularProgress />}
      {error == !null && <p>Error ...</p>}
      {items.length > 0 && (
        <>
          <List>
            {currentPageItems.map((repo) => (
              <RepositoryListItem key={repo.id} repo={repo} />
            ))}
          </List>
          <Pagination
            count={Math.ceil(items.length / itemsPerPage)}
            page={page}
            onChange={(event, value) => setPage(value)}
            color="primary"
          />
        </>
      )}
    </>
  );
}

export default App;

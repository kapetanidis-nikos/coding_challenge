import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRepositories } from './store/repositoryActions';
import CircularProgress from '@mui/material/CircularProgress';
import { List } from '@mui/material';
import RepositoryListItem from './components/RepositoryListItem';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRepositories({ perPage: 100 }));
  }, [dispatch]);

  const { items, loading, error } = useSelector((state) => state.repository);

  return (
    <>
      <div className="text-red-400">code_challenge</div>
      {loading && <CircularProgress />}
      {error == !null && <p>Error ...</p>}
      {items.length > 0 && (
        <List>
          {items.map((repo) => (
            <RepositoryListItem repo={repo} />
          ))}
        </List>
      )}
    </>
  );
}

export default App;

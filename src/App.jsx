import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRepositories } from './store/repositoryActions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRepositories({ perPage: 100 }));
  }, [dispatch]);

  const { items, loading, error } = useSelector((state) => state.repository);

  return (
    <>
      <div className="text-red-400">code_challenge</div>
      {loading && <p>Loading ...</p>}
      {items.length > 0 && <p>Items ...</p>}
      {error == !null && <p>Error ...</p>}
    </>
  );
}

export default App;

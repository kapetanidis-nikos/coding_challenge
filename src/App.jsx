import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRepositories } from './store/repositoryActions';
import Card from './components/Card';
import PopularRepositories from './components/PopularRepositories';
import AllRepositories from './components/AllRepositories';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRepositories({ perPage: 100 }));
  }, [dispatch]);

  const { items, loading, error } = useSelector((state) => state.repository);

  return (
    <div className="flex pt-10 pb-10 justify-center w-full min-h-screen bg-slate-50 items-center">
      <div className="w-3/5 gap-12 flex flex-col">
        <Card title={'Popular Repositories'}>
          <PopularRepositories items={items} />
        </Card>
        <Card title={'All Repositories'}>
          <AllRepositories items={items} />
        </Card>
      </div>
    </div>
  );
}

export default App;

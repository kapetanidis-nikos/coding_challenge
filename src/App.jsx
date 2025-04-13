import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRepositories } from './store/repositoryActions';
import Card from './components/Card';
import PopularRepositories from './components/PopularRepositories';
import AllRepositories from './components/AllRepositories';
import FloatingShape from './components/FloatingShape';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRepositories({ perPage: 100 }));
  }, [dispatch]);

  const { items, loading, error } = useSelector((state) => state.repository);

  return (
    <div
      className="flex pt-10 pb-10 min-h-svh w-full bg-gradient-to-br from-blue-900
       via-sky-900 to-indigo-900 items-center justify-center 
       relative overflow-hidden p-6 md:p-10"
    >
      <FloatingShape color="bg-sky-500" size="w-48 h-48" top="70%" left="80%" delay={5} />
      <FloatingShape color="bg-indigo-400" size="w-32 h-32" top="40%" left="-10%" delay={2} />

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

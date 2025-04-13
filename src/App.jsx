import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRepositories } from './store/repositoryActions';
import ListControls from './components/ListControls';
import ItemsPerPageSelector from './components/ItemsPerPageSelector';
import SearchInput from './components/SearchInput';
import ItemsSortingSelector from './components/ItemsSortingSelector';
import { filterByQuery, paginateItems, sortRepositories } from './utils';
import PopularRepositories from './components/PopularRepositories';
import Card from './components/Card';

function App() {
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRepositories({ perPage: 100 }));
  }, [dispatch]);

  const { items, loading, error } = useSelector((state) => state.repository);

  const filteredItems = filterByQuery(items, searchQuery);
  const sortedItems = sortRepositories(filteredItems, sortBy);
  const currentPageItems = paginateItems(sortedItems, page, itemsPerPage);

  const controls = (
    <>
      <SearchInput setPage={setPage} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ItemsPerPageSelector itemsPerPage={itemsPerPage} setItemsPerPage={setItemsPerPage} setPage={setPage} />
      <ItemsSortingSelector sortBy={sortBy} setSortBy={setSortBy} />
    </>
  );

  return (
    <div className="flex pt-10 pb-10 justify-center w-full min-h-screen bg-slate-50 items-center">
      <div className="w-3/5 gap-12 flex flex-col">
        <Card title={'Popular Repositories'}>
          <PopularRepositories items={items} />
        </Card>
        <Card title={'All Repositories'}>
          <ListControls
            controls={controls}
            pagination={true}
            currentPageItems={currentPageItems}
            sortedItems={sortedItems}
            itemsPerPage={itemsPerPage}
            page={page}
            setPage={setPage}
          />
        </Card>
      </div>
    </div>
  );
}

export default App;

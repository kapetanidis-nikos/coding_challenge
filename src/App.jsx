import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRepositories } from './store/repositoryActions';
import CircularProgress from '@mui/material/CircularProgress';
import { List, Pagination } from '@mui/material';
import RepositoryListItem from './components/RepositoryListItem';
import ItemsPerPageSelector from './components/ItemsPerPageSelector';
import SearchInput from './components/SearchInput';
import ItemsSortingSelector from './components/ItemsSortingSelector';
import { sortRepositories } from './utils';
import PopularRepositories from './components/PopularRepositories';

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

  // Filter items based on search query
  const filteredItems = items.filter(
    (repo) => repo.name.toLowerCase().includes(searchQuery.toLowerCase()), // Filter by repo name
  );

  const sortedItems = sortRepositories(filteredItems, sortBy);

  // Calculate the index range for the current page
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageItems = sortedItems.slice(startIndex, endIndex);

  return (
    <div className="flex flex-col justify-center w-full min-h-screen bg-slate-50 items-center">
      <div className="w-1/2">
        <PopularRepositories items={items} />
        {items.length > 0 && (
          <div className="w-full flex flex-col gap-6 items-center bg-slate-100 p-6 rounded-2xl">
            <div className="flex justify-between w-full">
              <SearchInput
                setPage={setPage}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
              <ItemsPerPageSelector
                itemsPerPage={itemsPerPage}
                setItemsPerPage={setItemsPerPage}
                setPage={setPage}
              />
              <ItemsSortingSelector sortBy={sortBy} setSortBy={setSortBy} />
            </div>
            <List className="flex flex-col gap-2 w-full">
              {currentPageItems.map((repo) => (
                <RepositoryListItem key={repo.id} repo={repo} />
              ))}
            </List>
            <Pagination
              count={Math.ceil(items.length / itemsPerPage)}
              page={page}
              onChange={(value) => setPage(value)}
              color="primary"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

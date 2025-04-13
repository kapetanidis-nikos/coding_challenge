import React, { useState } from 'react';
import ListControls from './ListControls';
import ItemsPerPageSelector from './ItemsPerPageSelector';
import SearchInput from './SearchInput';
import ItemsSortingSelector from './ItemsSortingSelector';
import { filterByQuery, paginateItems, sortRepositories } from './../utils';

export default function AllRepositories({ items }) {
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');

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
    <ListControls
      controls={controls}
      pagination={true}
      currentPageItems={currentPageItems}
      sortedItems={sortedItems}
      itemsPerPage={itemsPerPage}
      page={page}
      setPage={setPage}
    />
  );
}

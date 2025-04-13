export function sortRepositories(items, sortBy) {
  return [...items].sort((a, b) => {
    if (sortBy === 'name') {
      // Alphabetical
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'stars') {
      // Descending stars
      return b.stargazers_count - a.stargazers_count;
    }
    return 0;
  });
}

export function filterByQuery(items, query, key = 'name') {
  if (!query) return items;
  return items.filter((item) => item[key].toLowerCase().includes(query.toLowerCase()));
}

export function paginateItems(items, page, itemsPerPage) {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return items.slice(startIndex, endIndex);
}

export function getPopularRepositories(items, showAllPopular, limit = 5) {
  const popularRepos = items.filter((repo) => repo.stargazers_count > 1000);
  return showAllPopular ? popularRepos : popularRepos.slice(0, limit);
}

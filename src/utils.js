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

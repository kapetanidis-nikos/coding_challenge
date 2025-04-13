import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

export default function ItemsSortingSelector({ sortBy, setSortBy }) {
  return (
    <FormControl size="small" className="min-w-[150px]">
      <InputLabel id="sort-by-label">Sort By</InputLabel>
      <Select
        labelId="sort-by-label"
        value={sortBy}
        label="Sort By"
        onChange={(e) => setSortBy(e.target.value)}
      >
        <MenuItem value="name">Name (A-Z)</MenuItem>
        <MenuItem value="stars">Stars (High to Low)</MenuItem>
      </Select>
    </FormControl>
  );
}

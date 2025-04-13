import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { grey } from '@mui/material/colors';

export default function ItemsSortingSelector({ sortBy, setSortBy }) {
  return (
    <FormControl
      size="small"
      sx={{
        backgroundColor: grey[50],
      }}
      className="min-w-[150px]"
    >
      <InputLabel id="sort-by-label">Sort By</InputLabel>
      <Select labelId="sort-by-label" value={sortBy} label="Sort By" onChange={(e) => setSortBy(e.target.value)}>
        <MenuItem value="name">Name (A-Z)</MenuItem>
        <MenuItem value="stars">Stars (High to Low)</MenuItem>
      </Select>
    </FormControl>
  );
}

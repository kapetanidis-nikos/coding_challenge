import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchInput({ setPage, searchQuery, setSearchQuery }) {
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setPage(1);
  };

  return (
    <TextField
      label="Search Repositories"
      variant="outlined"
      size="small"
      value={searchQuery}
      onChange={handleSearchChange}
      className="w-2/3"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}

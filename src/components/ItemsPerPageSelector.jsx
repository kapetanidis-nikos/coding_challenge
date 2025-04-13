import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

export default function ItemsPerPageSelector({
  itemsPerPage,
  setItemsPerPage,
  setPage,
}) {
  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(event.target.value);
    setPage(1);
  };

  return (
    <FormControl sx={{ minWidth: 120 }} size="small">
      <InputLabel id="items-per-page-label">Items per page</InputLabel>
      <Select
        labelId="items-per-page-label"
        value={itemsPerPage}
        label="Items per page"
        onChange={handleItemsPerPageChange}
      >
        <MenuItem value={8}>8</MenuItem>
        <MenuItem value={16}>16</MenuItem>
      </Select>
    </FormControl>
  );
}

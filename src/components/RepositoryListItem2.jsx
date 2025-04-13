import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import StorageIcon from '@mui/icons-material/Storage';
import DraftsIcon from '@mui/icons-material/Drafts';
import { Link } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { blue } from '@mui/material/colors'; // Import MUI blue color palette

export default function RepositoryListItem2({ repo }) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton
        onClick={handleClick}
        sx={{
          transition: 'background-color 0.3s ease',
          '&:hover': {
            backgroundColor: blue[100],
          },
          p: 4,
          backgroundColor: 'white',
          boxShadow: 1,
        }}
      >
        <ListItemIcon>
          <StorageIcon />
        </ListItemIcon>
        <ListItemText
          primary={
            <div className="flex gap-8 items-center ">
              <p className="min-w-[33.33%]">{repo.name}</p>
              <div className="flex gap-2 ">
                <StarBorder />
                <p>{repo.stargazers_count}</p>
              </div>
            </div>
          }
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4, backgroundColor: blue[50] }}>
            <ListItemText primary={repo.description ? <p>{repo.description}</p> : <p>No description available</p>} />
            <ListItemIcon>
              <Link href={repo.html_url} target="_blank" rel="noopener noreferrer">
                See on Github
              </Link>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Collapse>
    </>
  );
}

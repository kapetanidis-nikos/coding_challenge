import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Link,
  Typography,
  IconButton,
  Pagination,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';

export default function RepositoryListItem({ repo }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ListItem
        className="bg-slate-100 rounded-md"
        secondaryAction={
          <IconButton
            className={`transform transition-transform duration-300 ease-in-out ${open ? 'rotate-180' : ''}`}
            onClick={() => setOpen((prevState) => !prevState)}
          >
            <KeyboardArrowDownIcon />
          </IconButton>
        }
      >
        <ListItemAvatar>
          <Avatar alt={repo.owner.login} src={repo.owner.avatar_url} />
        </ListItemAvatar>
        <ListItemText
          primary={repo.name}
          secondary={
            <>
              <Typography variant="body2" color="textSecondary">
                Stars: {repo.stargazers_count}
              </Typography>
            </>
          }
        />
      </ListItem>
      {open && (
        <div className="bg-slate-200">
          {repo.description ? <p>{repo.description}</p> : <p>No description description</p>}
          <Link href={repo.html_url} target="_blank" rel="noopener noreferrer">
            See on Github
          </Link>
        </div>
      )}
    </>
  );
}

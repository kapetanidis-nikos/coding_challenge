import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Link,
  Typography,
  IconButton,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';

export default function RepositoryListItem({ repo }) {
  const [open, setOpen] = useState(false);

  return (
    <ListItem key={repo.id}>
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
            {open && (
              <>
                {repo.description && <p>{repo.description}</p>}
                <Link
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Go to repo
                </Link>
              </>
            )}
          </>
        }
      />
      <IconButton
        className={`transform transition-transform duration-300 ease-in-out ${open ? 'rotate-180' : ''}`}
        onClick={() => setOpen((prevState) => !prevState)}
      >
        <KeyboardArrowDownIcon />
      </IconButton>
    </ListItem>
  );
}

import { ListItem, ListItemText, ListItemAvatar, Avatar, Link, Typography, IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';

export default function RepositoryListItem({ repo }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-slate-300 rounded-2xl">
      <ListItem>
        <ListItemAvatar>
          <Avatar alt={repo.owner.login} src={repo.owner.avatar_url} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <div className="flex gap-4">
              <h2>{repo.name}</h2>
              <p> Stars: {repo.stargazers_count}</p>
            </div>
          }
          // secondary={}
        />
        <IconButton
          className={`transform transition-transform duration-300 ease-in-out ${open ? 'rotate-180' : ''}`}
          onClick={() => setOpen((prevState) => !prevState)}
        >
          <KeyboardArrowDownIcon />
        </IconButton>
      </ListItem>
      {open && (
        <div className="ml-">
          {repo.description ? <p>{repo.description}</p> : <p>No description provided</p>}
          <Link href={repo.html_url} target="_blank" rel="noopener noreferrer">
            Go to repo
          </Link>
        </div>
      )}
    </div>
  );
}

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import HomeIcon from '@material-ui/icons/Home';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export default function Footer() {
  const classes = useStyles();
  const pathname = window.location.pathname; // in case user visits the path directly. The BottomNavBar is able to follow suit.
  const [value, setValue] = React.useState(pathname);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    
  };


  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
       <BottomNavigationAction
        component={Link}
        to="/"
        label="Home"
        value="/"
        icon={<HomeIcon />}
    />
      <BottomNavigationAction component={Link} to="/create-playlist" label="Criar Playlist" value="/create-playlist" icon={<FolderIcon />} />
    </BottomNavigation>
  );
}

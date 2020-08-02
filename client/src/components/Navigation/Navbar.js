import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(theme => ({
  toolbar: {
    ...theme.mixins.toolbar
  }
}))

export default function Navbar() {
  const classes = useStyle();
  return (
    <>
      <AppBar>
        <Toolbar>

        </Toolbar>
      </AppBar>
      <div className={classes.toolbar}></div>
    </>
  )
}

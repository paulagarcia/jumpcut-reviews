import React from 'react';
import PropTypes from 'prop-types';
// import with local styles
import { withStyles } from '@material-ui/core/styles';
// @material-ui/core components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from "@material-ui/core/Hidden";
// local components
import menuStyles from '../styles/menuStyles';
import logo from '../images/logo.svg'

const MenuMobile = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="absolute" className={classes.menu}>
      <Hidden mdUp implementation="css">
        <Toolbar>
          <IconButton className={classes.logo} color="inherit" aria-label="Menu">
            <img src={logo} alt="Jumpcut"/>
          </IconButton>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Hidden>
      </AppBar>
    </div>
  );
}

MenuMobile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(menuStyles)(MenuMobile);

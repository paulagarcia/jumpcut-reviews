import React from 'react';
import PropTypes from 'prop-types';
// import with local styles
import { withStyles } from '@material-ui/core/styles';
// @material-ui/core components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Hidden from "@material-ui/core/Hidden";
// local components
import menuStyles from '../styles/menuStyles';
import logo from '../images/logo.svg'
import MenuMobile from './MenuMobile';

const Menu = (props) => {
  const {classes} = props;
  return (
    <div className={classes.root}>
      <AppBar position="absolute" className={classes.menu}>
        <Hidden smDown implementation="css">
          <Toolbar>
            <IconButton className={classes.logo} color="inherit" aria-label="Menu">
              <img src={logo} alt="Jumpcut"/>
            </IconButton>
            <Button color="inherit" className={classes.menuItem}>Courses</Button>
            <Button color="inherit" className={classes.menuItem}>Company</Button>
            <Button color="inherit" className={classes.menuItem}>Login</Button>
          </Toolbar>
          </Hidden>
          <Hidden mdUp implementation="css">
            <MenuMobile />
          </Hidden>
      </AppBar>
    </div>
  );
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(menuStyles)(Menu);

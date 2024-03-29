import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import classes from './SideDrawer.module.css';
import Auxi from '../../../HOC/Auxi/Auxi';

const SideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  return(
    <Auxi>
    <Backdrop show={props.open} clicked={props.closed}/>
    <div className={attachedClasses.join(' ')}>
      <div className={classes.Logo}>
      <Logo />
      </div>
      <nav>
        <NavigationItems />
      </nav>
    </div>
    </Auxi>
  );
};

export default SideDrawer;

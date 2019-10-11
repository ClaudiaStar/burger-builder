import React, {Component} from 'react';
import Auxi from '../Auxi/Auxi';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import classes from './Layout.module.css';

class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false});
  }

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer}
    });
  }

  render() {
  return(
  <Auxi>
  <Toolbar DrawerToggleClicked={this.sideDrawerToggleHandler}/>
  <SideDrawer
  open={this.state.showSideDrawer}
  closed={this.sideDrawerClosedHandler}/>
  <main className={classes.Main}>
    {this.props.children}
  </main>
  </Auxi>
  )
}
}


export default Layout;

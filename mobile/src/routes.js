import {  createAppContainer  } from 'react-navigation';
import {  createStackNavigator } from 'react-navigation-stack';
import {  createDrawerNavigator  } from 'react-navigation-drawer';


import Login from './pages/Login';
import Main from './pages/Main';


const AppDrawerNavigator = createDrawerNavigator({
  Main: {
    screen: Main,
  },
  Login: {
    screen: Login
  },
});

const Routes = createAppContainer(
  createStackNavigator({
    Login: {
      screen: Login,
    },
    Main: {
      screen: AppDrawerNavigator,
    },
  }, {  defaultNavigationOptions: {
    header: null
  }
  })
);

export default Routes;
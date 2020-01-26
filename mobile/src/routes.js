import {  createAppContainer  } from 'react-navigation';
import {  createStackNavigator  } from 'react-navigation-stack';

import Login from './pages/Login';
import Main from './pages/Main';

const Routes = createAppContainer(
  createStackNavigator({
    Login: {
      screen: Login,
    },
    Main: {
      screen: Main,
      navigationOptions: {
        title: "Menu"
      }
    },
  }, {  defaultNavigationOptions: {
    header: null
  }
  })
);

export default Routes;
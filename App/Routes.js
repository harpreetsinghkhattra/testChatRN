import React, { Component } from 'react';
import Palette from './Palette';

//SCREENS
import Home from './Scenes/Home/Index';

//Drawer
import DrawerNav from './Routes/DrawerNav';

import {
  SwitchNavigator,
  StackNavigator
} from 'react-navigation';


// const AuthStackNavigator = StackNavigator({
//   Login: { screen: Login },
//   SignUp: { screen: SignUp },
//   ForgotPassword: { screen: ForgotPassword },
// }, {
//     //headerMode: 'float',
//     initialRouteName: 'Login',
//     navigationOptions: {
//       headerStyle: { backgroundColor: '#333' },
//       headerTintColor: '#fff',
//     },
//     //headerMode: 'none',
//   });

// //Tab navigation use later
// const TabNav = TabNavigator({
//   Home: { screen: Home },
//   Profile: { screen: Profile },
// }, {
//     tabBarPosition: 'bottom',
//     tabBarOptions: {
//       activeTintColor: '#fff',
//       inactiveTintColor: '#333',
//       pressColor: '#eee',
//       showIcon: true,
//       style: {
//         //backgroundColor: '#307B87',
//         backgroundColor: '#333',
//       },
//       tabStyle: {
//         padding: 0
//       },
//       upperCaseLabel: false,
//       labelStyle: {
//         fontSize: 11,
//       },
//     },
//     // Android
//     //swipeEnabled: false,
//     //animationEnabled: false
//   });


const AppNavigator = StackNavigator({
  Home: { screen: DrawerNav },
}, {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: { backgroundColor: Palette.toolbarBackgroundColor, shadowOpacity: 0, shadowRadius: 0, shadowOffset: { height : 0, width : 0}, elevation : 0 },
      headerTintColor: '#fff',
    },
    headerMode: 'none',
  });



const MainNavigator = SwitchNavigator({
  // Landing: { screen: Landing },
  // Login: { screen: AuthStackNavigator },
  Home: { screen: AppNavigator },
}, {
    //headerMode: 'float',
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: { backgroundColor: Palette.toolbarBackgroundColor },
      headerTintColor: '#fff',
    }
  });

export default class Routes extends Component {

  render = () => <MainNavigator {...this.props} />;

} /// End Class
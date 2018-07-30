import React, { Component } from 'react';
import { Image } from 'react-native';
import Palette from '../Palette';
import { DrawerNavigator } from 'react-navigation';
import WTouchable from '../Components/Common/WView/WTouchable';

//SCREENS
import Home from '../Scenes/Home/Index';

//Drawer Content
import DrawerContent from '../Scenes/Home/DrawerContent';

let DrawerNav = DrawerNavigator({
    Home: { screen: Home },
}, {
        drawerPosition: 'left',
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle',
        drawerBackgroundColor: Palette.sceneBackgroundColour,
        contentComponent: DrawerContent, // custom content
        contentOptions: {
            activeTintColor: '#627891',
            inactiveTintColor: '#444',
        },
    }
);

export default DrawerNav = DrawerNav;
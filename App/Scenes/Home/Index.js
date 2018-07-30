import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import WView from '../../Components/Common/WView/WView';
import WRow from '../../Components/Common/WView/WRow';
import WText from '../../Components/Common/WText';
import Palette from '../../Palette';
import TabsView from '../../Components/Tabs/TabsView';
import TabViews from '../../Components/Tabs/TabViews';
import WTouchable from '../../Components/Common/WView/WTouchable';

import Friends from '../Friends';
import Recent from '../Recent';
import Request from '../Request';

import { createStackNavigator } from 'react-navigation';

class Index extends Component {

    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;

        return {
            headerTitle: 'Recent',
            headerStyle: { backgroundColor: Palette.toolbarBackgroundColor, shadowOpacity: 0, shadowRadius: 0, shadowOffset: { height: 0, width: 0 }, elevation: 0 },
            drawerLabel: 'Home2',
            drawerIcon: ({ tintColor }) => (
                <Image style={{ tintColor: Palette.black, width: 25, height: 25 }} source={require('../../Images/recent.png')} />
            ),
            headerLeft: <WTouchable dial={5} padding={[10, 10]} onPress={() => navigation.toggleDrawer()}><Image source={require('../../Images/drawer.png')} style={{ tintColor: Palette.white, width: 25, height: 25 }} /></WTouchable>
        }
    };

    render() {

        const _renderHeader = () => {
            let tabs = [
                {
                    text: 'Recent',
                    selectedIconSource: require('../../Images/recent.png'),
                    iconSource: require('../../Images/recent.png')
                }, {
                    text: 'Friends',
                    selectedIconSource: require('../../Images/friends.png'),
                    iconSource: require('../../Images/friends.png')
                },
                {
                    text: 'Request',
                    selectedIconSource: require('../../Images/friend_request.png'),
                    iconSource: require('../../Images/friend_request.png')
                }
            ];
            return (
                <TabsView
                    tabs={tabs}
                    iconStyle={{ tintColor: Palette.white }}
                    selectedTextStyle={{ color: Palette.black, fontSize: 16, fontWeight: '400' }}
                    textStyle={{ color: Palette.white, fontSize: 16, fontWeight: '300' }}
                    selectedIconStyle={{ tintColor: Palette.black }} />
            );
        }

        return (
            <WView dial={2} flex={1}>
                <WView dial={5} flex={8.5} style={{ alignSelf: 'stretch', alignItems: 'stretch' }}>
                    <TabViews
                        indicator={_renderHeader()}
                        style={{ flex: 1 }}
                    >
                        <WView>
                            <Recent
                                {...this.props} />
                        </WView>
                        <WView>
                            <Friends
                                {...this.props} />
                        </WView>
                        <WView>
                            <Request
                                {...this.props} />
                        </WView>
                    </TabViews>
                </WView>
            </WView>
        )
    }
}

export default Index = createStackNavigator({
    Home: { screen: Index }
});
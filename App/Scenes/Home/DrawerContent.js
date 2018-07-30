import React, { Component } from 'react';
import WRow from '../../Components/Common/WView/WRow';
import WView from '../../Components/Common/WView/WView';
import WTouchable from '../../Components/Common/WView/WTouchable';
import WText from '../../Components/Common/WText';
import Palette from '../../Palette';

import TabsView from '../../Components/Tabs/TabsView';
import TabViews from '../../Components/Tabs/TabViews';
import OnlineFriends from './OnlineFriends';

import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	ScrollView,
	Image,
	AsyncStorage
} from 'react-native';

import { NavigationActions, DrawerItems, DrawerNavigation, SafeAreaView } from 'react-navigation';

export default class DrawerContent extends Component {

	render() {

		const { navigation } = this.props;

		const _renderHeader = () => {
			let tabs = [
				{
					selectedIconSource: require('../../Images/logout.png'),
					iconSource: require('../../Images/logout.png'),
					onTabPress: () => {
						alert('you succefully called this method')
					}
				}, {
					selectedIconSource: require('../../Images/list.png'),
					iconSource: require('../../Images/list.png')
				},
				{
					selectedIconSource: require('../../Images/settings.png'),
					iconSource: require('../../Images/settings.png')
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
			<WView dial={5} flex style={styles.container}>
				<WView dial={5} flex={0.3} backgroundColor={Palette.toolbarBackgroundColor}>
					<WView dial={5} flex padding={[10]}>
						<Image source={{ uri: 'https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg' }} style={{ width: 60, height: 60, borderRadius: 30 }} />
						<WText fontSize={24} fontWeight="500" color={Palette.white} padding={[5]}>Harpreet singh</WText>
						<WRow dial={5}>
							<WView flex dial={5}>
								<WText fontSize={18} fontWeight="300" color={Palette.white} >Followers</WText>
								<WText fontSize={16} fontWeight="300" color={Palette.white} >1100</WText>
							</WView>
							<WView flex dial={5}>
								<WText fontSize={18} fontWeight="300" color={Palette.white} >Following</WText>
								<WText fontSize={16} fontWeight="300" color={Palette.white} >1100</WText>
							</WView>
						</WRow>
					</WView>
				</WView>
				<WView dial={8} flex={0.7} backgroundColor={Palette.sceneBackgroundColour}>
					<WView dial={5} flex={8.5} style={{ alignSelf: 'stretch', alignItems: 'stretch' }}>
						<TabViews
							indicator={_renderHeader()}
							initialPage={1}
							tabPosition={"bottom"}
							horizontalScroll={false}
							style={{ flex: 1 }}
						>
							<WView>
								<OnlineFriends {...this.props} />
							</WView>
							<WView>
								<OnlineFriends {...this.props} />
							</WView>
							<WView>
								<WText>3</WText>
							</WView>
						</TabViews>
					</WView>
				</WView>
			</WView>
		);

	}

} /// End class

const styles = StyleSheet.create({
	container: {
		alignItems: 'stretch',
		alignSelf: 'stretch',
		backgroundColor: 'transparent'
	}
});
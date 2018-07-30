import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import TabViews from './TabViews';
import Palette from '../../Palette';

import WView from '../../Components/Common/WView/WView';
import WRow from '../../Components/Common/WView/WRow';

/**
 * It is showing sign up and sign in component header in login screen.
 */
export default class PagerTabIndicator extends Component {
    static propTypes = {
        ...View.propTypes,
        initialPage: PropTypes.number,
        pager: PropTypes.instanceOf(TabViews),
        tabs: PropTypes.arrayOf(PropTypes.shape({
            text: PropTypes.string,
            iconSource: Image.propTypes.source,
            selectedIconSource: Image.propTypes.source
        })).isRequired,
        // itemStyle: View.propTypes.style,
        // selectedItemStyle: View.propTypes.style,
        // iconStyle: Image.propTypes.style,
        // selectedIconStyle: Image.propTypes.style,
        // textStyle: Text.propTypes.style,
        // selectedTextStyle: Text.propTypes.style,
        changePageWithAnimation: PropTypes.bool,
    }

    /**
     * default properties
     */
    static defaultProps = {
        tabs: [],
        changePageWithAnimation: true
    }

    state = {
        selectedIndex: this.props.initialPage,
        left: 0
    }

    render() {
        console.log(this.state.left);
        let {
            tabs, pager, style, itemStyle, selectedItemStyle, iconStyle,
            selectedIconStyle, textStyle, selectedTextStyle, changePageWithAnimation,
            onTabPress
        } = this.props
        if (!tabs || tabs.length === 0) return null

        let tabsView = tabs.map((tab, index) => {
            let isSelected = this.state.selectedIndex === index
            return (
                <TouchableOpacity
                    style={[styles.itemContainer, isSelected ? selectedItemStyle : itemStyle]}
                    activeOpacity={0.6}
                    key={index}
                    onPress={() => {
                        if (typeof tab.onTabPress === "function") {
                            tab.onTabPress();
                            return;
                        }
                        if (!isSelected) {
                            if (this.props.changePageWithAnimation)
                                pager.setPage(index);
                            else pager.setPageWithoutAnimation(index);
                        }
                        return;
                    }}
                >
                    {/*<Icons name = "triangle" size = {30} color = {isSelected ? "#ffffff" : Color.commonColors.toolbarColor}/>*/}
                    <WView flex={1} dial={5}>
                        {tab.selectedIconSource && <Image
                            style={[styles.image, isSelected ? selectedIconStyle : iconStyle]}
                            source={isSelected ? tab.selectedIconSource : tab.iconSource}
                        />}
                        {tab.text && tab.text.length > 0 && <Text
                            style={[isSelected ? styles.textSelected : styles.text, isSelected ? selectedTextStyle : textStyle]}
                        >
                            {tab.text}
                        </Text>}
                    </WView>
                </TouchableOpacity>
            )
        })
        return (
            <View style={[styles.container, style]} >
                {tabsView}
            </View>
        )
    }

    onPageSelected(e) {
        this.setState({ selectedIndex: e.position })
    }

    onPageScroll(e) {
    }
}

//Styels for this component
const styles = StyleSheet.create({
    container: {
        height: 56,
        flexDirection: 'row',
        alignItems: 'stretch',
        backgroundColor: Palette.toolbarBackgroundColor
    },
    itemContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        height: 25,
        width: 25
    },
    text: {
        marginTop: 4,
        fontSize: 16,
        color: '#cccccc'
    },
    textSelected: {
        marginTop: 4,
        fontSize: 16,
        color: '#ffffff'
    },
    swiperIndicatorContainer: {
        left: 0,
        right: 0,
        bottom: 0,
        position: 'absolute'
    }
})

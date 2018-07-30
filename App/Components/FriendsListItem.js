import React, { Component } from 'react'
import WRow from './Common/WView/WRow';
import { FlatList, Image } from 'react-native';
import WView from './Common/WView/WView';
import WTouchableOpacity from './Common/WView/WTouchable';
import WText from './Common/WText';
import PropTypes from 'prop-types';
import Palette from '../Palette';

export default class FriendsListItem extends Component {
    static propTypes = {
        imageUrl: PropTypes.any,
        containerStyle: PropTypes.object,
        name: PropTypes.string,
        description: PropTypes.string,
        time: PropTypes.string,
        headerFontSize: PropTypes.number,
        bodyFontSize: PropTypes.number,
        status: PropTypes.bool
    }

    static defaultProps = {
        containerStyle: {},
        headerFontSize: 20,
        bodyFontSize: 16,
        status: false
    }

    render() {
        const { imageUrl, containerStyle, name, description, time, headerFontSize, bodyFontSize, status } = this.props;
        return (
            <WRow dial={5} flex padding={[10, 0]} style={[containerStyle]}>
                <WTouchableOpacity dial={5} flex={1.5}>
                    <WView dial={3}>
                        <Image source={require('../Images/dot.png')} style={[style.statusImg, { tintColor: status ? Palette.online : Palette.offline }]} />
                        <Image source={imageUrl} style={style.img} />
                    </WView>
                </WTouchableOpacity>
                <WTouchableOpacity flex={6}>
                    <WRow flex>
                        <WView dial={4} flex={4}>
                            <WText fontSize={headerFontSize} fontWeight="400" color={Palette.black} >{name}</WText>
                            <WText fontSize={bodyFontSize}>{description}</WText>
                        </WView>
                        <WView dial={5} flex={2}>
                            <WText fontSize={bodyFontSize}>{time}</WText>
                        </WView>
                    </WRow>
                </WTouchableOpacity>
            </WRow>
        )
    }
}

const style = {
    imgContainer: {

    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    statusImg: {
        width: 15,
        height: 15,
        borderRadius: 7,
        zIndex: 2,
        position: 'absolute'
    }
}

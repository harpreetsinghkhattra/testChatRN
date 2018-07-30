import React from 'react';
import { FlatList, Image } from 'react-native';
import WRow from '../Components/Common/WView/WRow';
import WView from '../Components/Common/WView/WView';
import WTouchableOpacity from '../Components/Common/WView/WTouchable';
import WText from '../Components/Common/WText';
import Scene from '../Scene';
import Palette from '../Palette';

export default class Recent extends Scene {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    isHeader: true,
                    heading: "Recent"
                },
                {
                    name: "harpreet singh",
                    img: "https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg",
                    description: "test test test test test",
                    time: new Date()
                },
                {
                    name: "harpreet singh",
                    img: "https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg",
                    description: "test test test test test",
                    time: new Date()
                },
                {
                    name: "harpreet singh",
                    img: "https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg",
                    description: "test test test test test",
                    time: new Date()
                },
                {
                    isHeader: true,
                    heading: "Yesterday"
                },
                {
                    name: "harpreet singh",
                    img: "https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg",
                    description: "test test test test test",
                    time: new Date()
                },
                {
                    name: "harpreet singh",
                    img: "https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg",
                    description: "test test test test test",
                    time: new Date()
                },
                {
                    name: "harpreet singh",
                    img: "https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg",
                    description: "test test test test test",
                    time: new Date()
                }
            ]
        }
    }

    render() {
        return (
            <FlatList
                data={this.state.data}
                keyExtractor={(item, index) => `Friends_${index}`}
                renderItem={({ item, index }) => {
                    return (
                        <WView flex padding={[5, 20]}>
                            {
                                item.isHeader ?
                                    <WView padding={[5, 0]}>
                                        <WText fontSize={24} fontWeight="300" color={Palette.recentSceneListHeaderColor}>{item.heading}</WText>
                                    </WView>
                                    :
                                    <WView padding={[5, 0]}>
                                        <WRow dial={5} flex padding={[15, 0]} style={style.listItemBackgroundColor}>
                                            <WTouchableOpacity dial={5} flex={1.5}>
                                                <Image source={{ uri: item.img }} style={style.img} />
                                            </WTouchableOpacity>
                                            <WTouchableOpacity flex={6}>
                                                <WRow flex>
                                                    <WView dial={1} flex={4}>
                                                        <WText fontSize={22} padding = {[0, 0, 5, 0]} fontWeight="400" color={Palette.black} >{item.name}</WText>
                                                        <WText fontSize={16}>{item.description}</WText>
                                                    </WView>
                                                    <WView dial={5} flex={2}>
                                                        <WText fontSize={16}>9:45 AM</WText>
                                                    </WView>
                                                </WRow>
                                            </WTouchableOpacity>
                                        </WRow>
                                    </WView>
                            }
                        </WView>
                    )
                }}
            />
        );
    }
}

const style = {
    img: {
        borderRadius: 25,
        width: 50,
        height: 50
    },
    listItemBackgroundColor: {
        backgroundColor: Palette.white
    }
}

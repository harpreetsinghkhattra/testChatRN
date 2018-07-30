import React from 'react';
import { FlatList, Image } from 'react-native';
import WRow from '../Components/Common/WView/WRow';
import WView from '../Components/Common/WView/WView';
import WTouchableOpacity from '../Components/Common/WView/WTouchable';
import WText from '../Components/Common/WText';
import Scene from '../Scene';
import Palette from '../Palette';

export default class Request extends Scene {

    constructor(props) {
        super(props);
        this.state = {
            data: [
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
                    description: "test test test test test",
                    img: "https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg",
                    time: new Date()
                }
            ]
        }
    }

    render() {
        return (
            <FlatList
                data={this.state.data}
                style={{backgroundColor: Palette.white}}
                keyExtractor={(item, index) => `Friends_${index}`}
                renderItem={({ item, index }) => {
                    return (
                        <WRow dial={5} flex padding={[20, 0]} style={style.borderSeparetor}>
                            <WTouchableOpacity dial={5} flex={1.5}>
                                <Image source={{ uri: item.img }} style={style.img} />
                            </WTouchableOpacity>
                            <WTouchableOpacity flex={6}>
                                <WRow flex>
                                    <WView dial={1} flex={2}>
                                        <WText fontSize={20} fontWeight="400" color="#000" >{item.name}</WText>
                                        <WText fontSize={16}>{item.description}</WText>
                                    </WView>
                                    <WView dial={5} flex={2}>
                                        <WRow>
                                            <WTouchableOpacity>
                                                <WText fontSize={16} padding={[10, 5]} color={Palette.grayDark}>Ignore</WText>
                                            </WTouchableOpacity>
                                            <WTouchableOpacity>
                                                <WText fontSize={16} padding={[10, 5]} color={Palette.requestSceneListItemAcceptBtnColor}>Accept</WText>
                                            </WTouchableOpacity>
                                        </WRow>
                                    </WView>
                                </WRow>
                            </WTouchableOpacity>
                        </WRow>
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
    borderSeparetor: {
        borderWidth: 0.5,
        borderStyle: "solid",
        borderColor: "#ccc"
    }
}

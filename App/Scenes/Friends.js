import React from 'react';
import { FlatList, Image } from 'react-native';
import WRow from '../Components/Common/WView/WRow';
import WView from '../Components/Common/WView/WView';
import WTouchableOpacity from '../Components/Common/WView/WTouchable';
import WText from '../Components/Common/WText';
import Scene from '../Scene';
import FriendsListItem from '../Components/FriendsListItem';

export default class Friends extends Scene {

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
                keyExtractor={(item, index) => `Friends_${index}`}
                renderItem={({ item, index }) => {
                    return (
                        <FriendsListItem
                            imageUrl={{ uri: item.img }}
                            containerStyle={style.borderSeparetor}
                            name={item.name}
                            description={item.description}
                            time={"9:45"}
                            headerFontSize={17}
                            bodyFontSize={14}
                            status={item.status}
                        />
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

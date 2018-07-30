import React from 'react';
import { ScrollView, Image } from 'react-native';
import WRow from '../Components/Common/WView/WRow';
import WView from '../Components/Common/WView/WView';
import WTouchableOpacity from '../Components/Common/WView/WTouchable';
import WText from '../Components/Common/WText';
import Scene from '../Scene';

export default class Profile extends Scene {

    constructor(props) {
        super(props);
        this.state = {
            name: "harpreet singh",
            img: "https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg",
            description: "test test test test test",
            time: new Date()
        }
    }

    render() {
        return (
            <View></View>
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

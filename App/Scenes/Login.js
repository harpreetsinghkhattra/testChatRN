import React, { Component } from 'react';
import WRow from '../Components/Common/WView/WRow';
import WView from '../Components/Common/WView/WView';
import WText from '../Components/Common/WText';
import { Image, ScrollView } from 'react-native';
import WTextInput from '../Components/WTextInput';
import Palette from '../Palette';
import WButton from '../Components/WButton';

export default class Login extends Component {
    render() {
        const { container, logo, stretch, btnStyle } = styles;

        return (
            <ScrollView contentContainerStyle={container}>
                <WView dial={5} flex={3}>
                    <Image source={require("../Images/logo.png")} style={logo} />
                </WView>
                <WView dial={2} flex={5} margin={[0, 30]} style={[stretch, { justifyContent: 'space-between' }]}>
                    <WText dial={1} padding={[10]} fontSize={22} fontWeight="400" color={Palette.white}>LOGIN</WText>
                    <WText dial={1} padding={[5]} fontSize={15} color={Palette.white}>Email</WText>
                    <WTextInput
                        placeholderName={"Email"}
                        value={""}
                        onSubmitEditing={() => { }} />
                    <WText dial={1} padding={[5]} fontSize={15} color={Palette.white}>Password</WText>
                    <WTextInput
                        placeholderName={"Password"}
                        value={""}
                        onSubmitEditing={() => { }} />
                    <WView dial={6}>
                        <WButton
                            dial={6}
                            fontSize={16}
                            label="Forgot Password?"
                            btnPadding={[10]}
                        />
                        <WButton
                            dial={5}
                            fontSize={16}
                            style={btnStyle}
                            label="LOGIN"
                            btnPadding={[5, 40]}
                        />
                    </WView>
                </WView>
                <WView dial={4} flex={3} margin={[0, 30]}>
                    <WText padding={[5]} fontSize={16} color={Palette.white}>Terms & Conditions</WText>
                </WView>
            </ScrollView >
        )
    }
}

const styles = {
    container: {
        flexGrow: 1,
        backgroundColor: Palette.appThemeColor
    },
    logo: { width: 60, height: 60, tintColor: Palette.white },
    stretch: { alignSelf: 'stretch', alignItems: 'stretch' },
    btnStyle: { borderColor: Palette.white, borderWidth: 1, borderStyle: "solid", alignSelf: 'center', alignItems: 'center' }
}
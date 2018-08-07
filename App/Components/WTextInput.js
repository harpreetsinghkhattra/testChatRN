import React from 'react'
import PropTypes from 'prop-types'
import { TextInput, Image } from 'react-native';
import WRow from './Common/WView/WRow';
import WView from './Common/WView/WView';
import Palette from '../Palette';
import Config from '../Config';

export default WTextInput = ({
    placeholderTextColor,
    placeholderName,
    keyboardType,
    value,
    onSubmitEditing,
    secureTextEntry,
    returnKeyLabel,
    returnKeyType,
    isImage,
    style,
    ...rest
}) => {

    const { container, textInputIcon } = styles;
    return (
        <WView flex dial={5} style={container}>
            <WRow dial={5}>
                <TextInput
                    {...rest}
                    underlineColorAndroid={"transparent"}
                    placeholderTextColor={placeholderTextColor}
                    placeholder={placeholderName}
                    onSubmitEditing={onSubmitEditing}
                    secureTextEntry={secureTextEntry}
                    returnKeyType={returnKeyType}
                    keyboardType={keyboardType}
                    value={value}
                    style={[{ flex: 1 }, style]}
                />
                {true && <Image source={true ? require('../Images/show_password.png') : require('../Images/hide_password.png')} style={textInputIcon} />}
            </WRow>
        </WView>
    )
}

WTextInput.propTypes = {
    placeholderTextColor: PropTypes.string,
    secureTextEntry: PropTypes.bool,
    isImage: PropTypes.bool,
    returnKeyType: PropTypes.string,
    placeholderName: PropTypes.string.isRequired,
    keyboardType: PropTypes.string,
    value: PropTypes.string.isRequired,
    onSubmitEditing: PropTypes.func.isRequired,
}

WTextInput.defaultProps = {
    placeholderTextColor: Palette.placholderColor,
    keyboardType: "default",
    value: "",
    secureTextEntry: false,
    returnKeyType: "go",
    isImage: false
}

const styles = {
    container: { alignItems: 'stretch', alignSelf: "stretch", minHeight: 40, maxHeight: 40, borderColor: Palette.white, borderBottomWidth: 1, borderStyle: "solid" },
    textInputIcon: { width: 20, height: 20, tintColor: Palette.white }
}

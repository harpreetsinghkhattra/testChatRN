import React from 'react';
import { Text as RNText, Platform } from 'react-native';
import WRowStyles from '../Common/WView/WRowStyles';

const Text = (props) => {
    const {
        lines = 1,
        fontWeight = "300",
        color,
        style,
        center,
        right,
        transparent,
        margin,
        padding
    } = props;
    const textAlign = center ? 'center' : right ? 'right' : null;
    const fontSize = props.fontSize ? props.fontSize : 12;
    const backgroundColor = transparent ? 'transparent' : null;
    const _wRowStyles = WRowStyles(margin, padding);

    return (
        <RNText
            style={[{ fontSize, textAlign, color, backgroundColor, fontWeight: fontWeight }, _wRowStyles, style]}
            numberOfLines={lines}
        >
            {props.children}
        </RNText>
    );
}

export default Text;
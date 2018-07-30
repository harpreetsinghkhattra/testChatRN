import React from 'react';
import { TouchableOpacity as RNTouchable } from 'react-native';
import WRowStyles from './WRowStyles'

const View = (props) => {

    const {
        dial = 0,
        flex: _flex,
        style,
        spaceBetween,
        spaceAround,
        stretch,
        margin,
        padding,
        reverse,
        ...otherProps
    } = props;

    const _dial = dial > 0 && dial < 10 ? dial : 0;
    const flex = typeof (_flex) === "number" ? _flex : !_flex ? null : 1

    const _wRowStyles = WRowStyles(margin, padding)

    const justifyContent = spaceBetween ? 'space-between' : spaceAround ? 'space-around' : _dial === 0 ? null : _dial > 6 ? 'flex-end' :
        _dial > 3 ? 'center' : 'flex-start';

    const alignItems = stretch ? 'stretch' : _dial === 0 ? null : _dial % 3 === 0 ? 'flex-end' :
        _dial % 3 === 2 ? 'center' : 'flex-start';

    const flexDirection = reverse ? 'column-reverse' : 'column';

    return (
        <RNTouchable style={[{ flexDirection, justifyContent, alignItems, flex }, _wRowStyles, style]} {...otherProps} activeOpacity = {0.6}>
            {props.children}
        </RNTouchable>
    );
};

export default View;
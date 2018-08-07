import React from 'react'
import PropTypes from 'prop-types'
import WTouchable from './Common/WView/WTouchable';
import WText from './Common/WText';
import WSpinner from './Spinner';
import Palette from '../Palette';

export default WButton = ({ isLoading, dial, label, style, onPress, btnPadding, fontSize }) => {
    return (
        <WTouchable dial={dial} onPress={isLoading ? () => { } : onPress} style={style} padding={btnPadding}>
            {
                isLoading ?
                    <WSpinner />
                    :
                    <WText fontSize={fontSize} color={Palette.white}>{label}</WText>
            }
        </WTouchable>
    )
}

WButton.propTypes = {
    isLoading: PropTypes.bool,
    label: PropTypes.string,
    style: PropTypes.object,
    onPress: PropTypes.func,
    btnPadding: PropTypes.array,
    dial: PropTypes.number.isRequired,
    fontSize: PropTypes.number
}

WButton.defaultProps = {
    isLoading: false,
    style: {}
}

import React from 'react'
import PropTypes from 'prop-types'
import { ActivityIndicator } from 'react-native';

export default WSpinner = ({ size }) => {
    return (
        <ActivityIndicator
            size={size}
        />
    )
}

WSpinner.propTypes = {
    size: PropTypes.string
}

WSpinner.defaultProps = {
    size: 'small'
}

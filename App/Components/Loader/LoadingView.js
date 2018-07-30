import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    StyleSheet,
    Animated,
} from 'react-native';

export default class Placeholder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            width: 0,
            isMeasured: false,
            resolved: false
        };
    }

    componentDidMount() {
        this.context.registerPlaceholder(this);
    }

    render() {
        const { style, children } = this.props;
        const { x, isMeasured, resolved } = this.state;
        const { animatedComponent, position } = this.context;

        if (resolved) {
            return children
        }
        const animatedStyle = {
            height: '100%',
            width: '100%',
            transform: [{ translateX: position }],
            left: -x
        };
        return (
            <View
                ref={
                    ref => {
                        this.testRef = ref;
                    }
                }
                onLayout={this._setDimensions}
                style={[style, styles.overflow]}
            >
                {
                    isMeasured &&
                    <Animated.View style={animatedStyle}>
                        {animatedComponent}
                    </Animated.View>
                }
            </View >
        );
    }
    _resolve = () => {
        this.setState(() => ({ resolved: true }));
    };

    _setDimensions = (event) => {
        const { x } = event.nativeEvent.layout;
        this.setState(() => ({ x, isMeasured: true }));
    };
}

Placeholder.contextTypes = {
    position: PropTypes.object.isRequired,
    animatedComponent: PropTypes.object.isRequired,
    registerPlaceholder: PropTypes.func.isRequired
}


const styles = StyleSheet.create({
    overflow: {
        overflow: 'hidden'
    }
});
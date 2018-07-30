import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    View,
    StyleSheet,
    Animated,
    Dimensions,
    Platform
} from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default class PlaceholderContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ContainerComponent: { x: 0, y: 0, width: 0, height: 0 },
            AnimatedComponent: { x: 0, y: 0, width: 0, height: 0 },
            startPosition: 0,
            stopPosition: 0,
            isContainerComponentMeasured: false,
            isAnimatedComponentMeasured: false,
            Component: null
        };
        this.position = new Animated.Value(0);
        this.placeholders = [];
        this._measureContainerComponent = this._measureView.bind(
            null,
            'ContainerComponent'
        );
        this._measureAnimatedComponent = this._measureView.bind(
            null,
            'AnimatedComponent'
        );
    }
    getChildContext() {
        return {
            position: this.position,
            animatedComponent: this.props.animatedComponent,
            registerPlaceholder: this._registerPlaceholder
        };
    }
    componentDidMount() {
        const { loader, replace } = this.props;
        loader &&
            Promise.resolve(loader).then(Component => {
                !replace ? this.setState({ Component }) : this._replacePlaceholders();
            });
    }

    componentWillUnmount() {
        this.position.stopAnimation();
    }

    render() {
        const { style, elements, animatedComponent, children } = this.props;
        const { Component, isAnimatedComponentMeasured } = this.state;
        return (
            <View
                ref={ref => {
                    this.containerRef = ref;
                }}
                onLayout={this._measureContainerComponent}
                style={style}
            >
                {!isAnimatedComponentMeasured &&
                    <View
                        ref={ref => {
                            this.componentRef = ref;
                        }}
                        onLayout={this._measureAnimatedComponent}
                        style={styles.offscreen}
                    >
                        {animatedComponent}
                    </View>}
                {(Component && Component) || children}
            </View>
        );
    }

    _triggerAnimation = () => {
        const { duration, delay } = this.props;
        const { startPosition, stopPosition } = this.state;
        Animated.loop(Animated.sequence([
            Animated.timing(this.position, {
                toValue: stopPosition || screenWidth,
                duration: duration,
                useNativeDriver: true,
                isInteraction: false
            }),
            Animated.timing(this.position, {
                toValue: startPosition || 0,
                duration: 0,
                delay: delay || 0,
                useNativeDriver: true,
                isInteraction: false
            })
        ])).start();
    };

    _startAndRepeat = () => {
        const { Component } = this.state;
        !Component && this._triggerAnimation();
    };

    _measureView = (viewName, event) => {
        const { x, y, height, width } = event.nativeEvent.layout;
        this.setState(
            () => ({
                [viewName]: {
                    x,
                    y,
                    height,
                    width
                },
                [`is${viewName}Measured`]: true
            }),
            () => {
                this._setAnimationPositions();
            }
        );
    };

    _setAnimationPositions = () => {
        const {
      ContainerComponent,
            AnimatedComponent,
            isContainerComponentMeasured,
            isAnimatedComponentMeasured
    } = this.state;
        if (!isContainerComponentMeasured || !isAnimatedComponentMeasured) {
            return;
        }
        const startPosition = -(ContainerComponent.x + AnimatedComponent.width);
        const stopPosition =
            ContainerComponent.x + ContainerComponent.width + AnimatedComponent.width;
        this.setState(
            () => ({
                startPosition,
                stopPosition
            }),
            () => {
                this.position.setValue(startPosition);
                this._startAndRepeat();
            }
        );
    };

    _registerPlaceholder = (placeholder) => {
        const { replace } = this.props;
        if (!replace) {
            return;
        }
        this.placeholders.push(placeholder);
    };

    _replacePlaceholders = () => {
        try {
            this.placeholders.forEach(placeholder => {
                placeholder._resolve();
            });
        } catch (e) {
            console.log('Something went wrong');
        }
    };
}

PlaceholderContainer.childContextTypes = {
    position: PropTypes.object.isRequired,
    animatedComponent: PropTypes.object.isRequired,
    registerPlaceholder: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    offscreen: {
        position: 'absolute',
        left: -1000
    }
});
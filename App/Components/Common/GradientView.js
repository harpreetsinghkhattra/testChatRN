import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

export default class GradComponent extends PureComponent {

    render = () => {
        const { props } = this;
        const gradientHeight = 500;
        const gradientBackground = '#000';
        const data = Array.from({ length: gradientHeight });
        return (
            <View style={{ flex: 1 }}>
                {data.map((_, i) => (
                    <View
                        key={i}
                        style={{
                            position: 'absolute',
                            backgroundColor: gradientBackground,
                            height: 1,
                            bottom: (gradientHeight - i),
                            right: 0,
                            left: 0,
                            zIndex: 2,
                            opacity: (1 / gradientHeight) * (i + 1)
                        }}
                    />
                ))}
                {props.children}
            </View>
        );
    }
}

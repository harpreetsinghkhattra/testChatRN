import React, { Component } from 'react'
import { View } from 'react-native';

export default class ProfileHeader extends Component {
  render() {
    return (
      <View style={styles.parallelogram}>
        <View style={[styles.triangleCorner, styles.triangleCornerBottomLeft]} />
        <View style={styles.parallelogramInner} />
      </View>
    )
  }
}

const  styles = {
   triangleCorner: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 100,
    borderTopWidth: 100,
    borderRightColor: 'transparent',
    borderTopColor: 'red'
  },
  triangleCornerBottomLeft: {
    transform: [
      {rotate: '270deg'}
    ]
  },
  parallelogram: {
    width: 150,
    height: 100
  },
  parallelogramInner: {
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: 'red',
    width: 150,
    height: 100,
  },
  parallelogramRight: {
    top: 0,
    right: -50,
    position: 'absolute'
  },
  parallelogramLeft: {
    top: 0,
    left: -50,
    position: 'absolute'
  }
}


import React from 'react'
import { InteractionManager, ToastAndroid } from 'react-native'
import PropTypes from "prop-types";

import Scene from '../Scene';
import Home from './Home/Index';
import LoadingContainer from '../Components/Loader/LoadingContainer';
import LoadingView from '../Components/Loader/LoadingView';
import Gradient from '../Components/Common/GradientView';
import ProfileHeader from '../Components/Profile/ProfileHeader';

import {
  TouchableOpacity,
  Text,
  View,
  Dimensions,
  Image,
  StatusBar,
  ScrollView
} from 'react-native'

const TAB_CONNECTED = 0
const TAB_SUGGESTED = 1
const TAB_PEERREQUESTS = 2

class Main extends Scene {

  constructor(props) {
    super(props)
    this.first_load = true
    this.is_mounted = false
    this.cxn_unread_msgs = {}

    this.state = {
      activeTab: TAB_CONNECTED,
      searchText: '',
      peerConnections: [],
      botConnections: [],
      pendingPeerConnections: [],
      pendingBotConnections: [],
      profiles: [],
      progressCopy: 'Loading...',
      asyncActionInProgress: true,
      activeBots: [],
    }
  }

  componentDidMount() {
    super.componentDidMount()
    this.is_mounted = true;
  }

  componentWillUnmount() {
    this.is_mounted = false
    if (this.interaction) this.interaction.cancel()
  }

  componentDidFocus() {
    if (this.first_load) {
      this.first_load = false
      return
    }
    super.componentDidFocus()
  }

  render() {
    return (
      <Home {...this.props} />
    )
  }
}

Main.contextTypes = {
  // behavior
  "onEditResource": PropTypes.func,
  "onSaveResource": PropTypes.func,

  // state
  "getShouldClearResourceCache": PropTypes.func
}

export default Main

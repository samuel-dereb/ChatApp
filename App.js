'use strict'
import React from 'react';
import { AppRegistry } from 'react-native'
import { StackNavigator } from 'react-navigation'
import SignUp from "./components/SignUp"
import SignIn from "./components/SignIn"
import Rooms from "./components/Rooms"
import Messages from "./components/Messages"

const RootNavigator = StackNavigator(
  {
    SignIn: { name: 'SignIn', screen: SignIn },
    SignUp: { name: 'SignUp', screen: SignUp },
    Rooms: { name: 'Rooms', screen: Rooms },
    Messages: { name: "Messages", screen: Messages }
  },
  { headerMode: 'screnn'}  
)

AppRegistry.registerComponent('RNFirebaseChat', () => RootNavigator)

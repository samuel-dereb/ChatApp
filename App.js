'use strict'
import 'react-native-gesture-handler'
import { AppRegistry } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import SignUp from "./components/SignUp"
import SignIn from "./components/SignIn"
import Rooms from "./components/Rooms"
import Messages from "./components/Messages"

const RootNavigator = createStackNavigator(
  {
    SignIn: { name: 'SignIn', screen: SignIn },
    SignUp: { name: 'SignUp', screen: SignUp },
    Rooms: { name: 'Rooms', screen: Rooms },
    Messages: { name: "Messages", screen: Messages },
  },
  { headerMode: 'screen'}
)

const container = createAppContainer(RootNavigator)

AppRegistry.registerComponent('chatApp', () => container)

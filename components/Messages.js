'use strict'
import React, { Component } from 'react';
import {
  StatusBar,
  View
} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import firebaseApp from './firebaseConfig.js';
import styles from './styles.js';

class Messages extends Component {
	constructor(props) {
		super(props)
		const FirebaseDB = firebase.database()
		const roomKey = this.props.navigation.state.params.roomKey
		this.messagesRef = FirebaseDB.ref(`messages/${roomKey}`)
		this.state={
			user: '',
			messages: []
		}
		this.addMessage = this.addMessage.bind(this)
	}
	componentDidMount() {
		this.setState({ user: firebaseApp.auth().currentUser })
		this.listenForMessages(this.messagesRef)
	}
	listenForMessages(messagesRef) {
		messagesRef.on('value', (dataSnapshot) => {
		  var messagesFB = [];
		  dataSnapshot.forEach((child) => {
			messagesFB = [({
			  _id: child.key,
			  text: child.val().text,
			  createdAt: child.val().createdAt,
			  user: {
				_id: child.val().user._id,
				name: child.val().user.name
			  }
			}), ...messagesFB];
		  });
		  this.setState({ messages: messagesFB });
		});
	}
	addMessage(message = {}) {
		var messages = message[0]
		this.messagesRef.push({
			text: messages.text,
			createdAt: Date.now(),
			user: {
				_id: messages.user._id,
				name: messages.user.name
			}
		})
	}
	static navigationOptions = ({ navigation }) => ({
		title: navigation.state.params.roomName,
		headerStyle: styles.messagesHeader,
		headerTitleStyle: styles.messagesTitle,
		headerBackTitleStyle: styles.messagesBackTitle
	});
	render() {
		return (
		<View style={{flex: 1}}>
			<StatusBar barStyle="light-content"/>
				<GiftedChat
				messages={this.state.messages}
				onSend={this.addMessage}
				user={{
					_id: this.state.user.uid,
					name: this.state.user.email
				}}
				/>
		</View>
		);
	}
}

export default Messages;
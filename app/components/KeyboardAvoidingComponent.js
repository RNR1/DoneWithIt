import React from 'react'
import {
	KeyboardAvoidingView,
	Platform,
	TouchableWithoutFeedback,
	Keyboard
} from 'react-native'

export default KeyboardAvoidingComponent = ({ children }) => {
	return (
		<KeyboardAvoidingView
			behavior='position'
			keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				{children}
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}

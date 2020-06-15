import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import WelcomeScreen from '../screens/WelcomeScreen'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'

const AuthStack = createStackNavigator()

export default AuthNavigator = () => (
	<AuthStack.Navigator>
		<AuthStack.Screen
			name='Welcome'
			component={WelcomeScreen}
			options={{ headerShown: false }}
		/>
		<AuthStack.Screen name='Login' component={LoginScreen} />
		<AuthStack.Screen name='Register' component={RegisterScreen} />
	</AuthStack.Navigator>
)

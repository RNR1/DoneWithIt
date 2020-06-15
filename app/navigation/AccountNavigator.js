import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import MyAccountScreen from '../screens/MyAccountScreen'
import MessagesScreen from '../screens/MessagesScreen'

const AccountStack = createStackNavigator()
export default AccountNavigator = () => (
	<AccountStack.Navigator>
		<AccountStack.Screen name='Account' component={MyAccountScreen} />
		<AccountStack.Screen name='Messages' component={MessagesScreen} />
	</AccountStack.Navigator>
)

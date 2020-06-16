import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AccountScreen from '../screens/AccountScreen'
import MessagesScreen from '../screens/MessagesScreen'

const AccountStack = createStackNavigator()
export default AccountNavigator = () => (
	<AccountStack.Navigator>
		<AccountStack.Screen name='Account' component={AccountScreen} />
		<AccountStack.Screen name='Messages' component={MessagesScreen} />
	</AccountStack.Navigator>
)

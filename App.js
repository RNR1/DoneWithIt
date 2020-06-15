import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AppNavigator, AuthNavigator } from './app/navigation'
import navigationTheme from './app/navigation/navigationTheme'

export default function App() {
	return (
		<NavigationContainer theme={navigationTheme}>
			<AppNavigator />
		</NavigationContainer>
	)
}

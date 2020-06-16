import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AppNavigator, AuthNavigator } from './app/navigation'
import navigationTheme from './app/navigation/navigationTheme'
import OfflineNotice from './app/components/OfflineNotice'

export default function App() {
	return (
		<>
			<OfflineNotice />
			<NavigationContainer theme={navigationTheme}>
				<AppNavigator />
			</NavigationContainer>
		</>
	)
}

import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ListingsScreen from '../screens/ListingsScreen'
import ListingDetailsScreen from '../screens/ListingDetailsScreen'

const FeedStack = createStackNavigator()

export default FeedNavigator = () => (
	<FeedStack.Navigator mode='modal' screenOptions={{ headerShown: false }}>
		<FeedStack.Screen name='Listings' component={ListingsScreen} />
		<FeedStack.Screen
			name='ListingDetails'
			component={ListingDetailsScreen}
			options={({ route }) => {
				return {
					title: route.params.title
				}
			}}
		/>
	</FeedStack.Navigator>
)

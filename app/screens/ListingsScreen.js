import React from 'react'
import { FlatList } from 'react-native'

import Card from '../components/Card'
import routes from '../navigation/routes'
import Screen from '../components/Screen'

const listings = [
	{
		id: 1,
		title: 'Red jacket for sale',
		subTitle: '100',
		image: require('../assets/jacket.jpg'),
		owner: {
			title: 'Mosh Hamedani',
			subTitle: '5 Listings',
			image: require('../assets/mosh.jpg')
		}
	},
	{
		id: 2,
		title: 'Couch in great condition',
		subTitle: '1000',
		image: require('../assets/couch.jpg'),
		owner: {
			title: 'Mosh Hamedani',
			subTitle: '5 Listings',
			image: require('../assets/mosh.jpg')
		}
	}
]

export default function ListingsScreen({ navigation }) {
	return (
		<Screen>
			<FlatList
				data={listings}
				keyExtractor={(listing) => listing.id.toString()}
				renderItem={({ item }) => (
					<Card
						key={item.id}
						title={item.title}
						subTitle={`$${item.subTitle}`}
						image={item.image}
						onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
					/>
				)}
			/>
		</Screen>
	)
}

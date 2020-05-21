import React from 'react'

import Screen from '../components/Screen'
import Card from '../components/Card'
import { FlatList } from 'react-native'

const listings = [
	{
		id: 1,
		title: 'Red jacket for sale',
		subTitle: '100',
		image: require('../assets/jacket.jpg')
	},
	{
		id: 2,
		title: 'Couch in great condition',
		subTitle: '1000',
		image: require('../assets/couch.jpg')
	}
]

export default function ListingsScreen() {
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
					/>
				)}
			/>
		</Screen>
	)
}

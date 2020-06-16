import React, { useEffect } from 'react'
import { FlatList } from 'react-native'

import listingsApi from '../api/listings'
import Card from '../components/Card'
import routes from '../navigation/routes'
import Screen from '../components/Screen'
import AppText from '../components/Text'
import Button from '../components/Button'
import ActivityIndicator from '../components/ActivityIndicator'
import useApi from '../hooks/useApi'

export default function ListingsScreen({ navigation }) {
	const { data: listings, error, loading, request: loadListings } = useApi(
		listingsApi.getListings
	)

	useEffect(() => {
		loadListings()
	}, [])
	return (
		<>
			<ActivityIndicator visible={loading} />
			<Screen>
				{error && (
					<>
						<AppText>Couldn't retrieve the listings.</AppText>
						<Button title='Retry' onPress={loadListings} />
					</>
				)}
				<FlatList
					data={listings}
					keyExtractor={(listing) => listing.id.toString()}
					renderItem={({ item }) => (
						<Card
							key={item.id}
							title={item.title}
							subTitle={`$${item.price}`}
							imageUrl={item.images[0].url}
							onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
							thumbnailUrl={item.images[0].thumbnailUrl}
						/>
					)}
				/>
			</Screen>
		</>
	)
}

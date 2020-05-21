import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import colors from '../config/colors'
import ListItem from '../components/ListItem'

const image = require('../assets/jacket.jpg')
const ownerImage = require('../assets/mosh.jpg')

export default function ListingDetailsScreen() {
	return (
		<View style={styles.container}>
			<Image source={image} style={styles.image}></Image>
			<View style={styles.detailsContainer}>
				<Text style={styles.title}>Red jacket for sale</Text>
				<Text style={styles.price}>100$</Text>
			</View>
			<ListItem
				title='Mosh Hamedani'
				subTitle='5 Listings'
				image={ownerImage}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: { flex: 1 },
	image: { height: 300, width: '100%' },
	detailsContainer: { marginLeft: 15, marginVertical: 20, marginBottom: 40 },
	title: { fontSize: 24, fontWeight: 'bold', marginVertical: 10 },
	price: { color: colors.secondary, fontSize: 18, fontWeight: '500' }
})

import React from 'react'
import {
	StyleSheet,
	Text,
	View,
	KeyboardAvoidingView,
	Platform,
	Keyboard
} from 'react-native'
import { Image } from 'react-native-expo-image-cache'

import colors from '../config/colors'
import { ListItem } from '../components/lists'
import ContactSellerForm from '../components/ContactSellerForm'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

export default function ListingDetailsScreen({ route: { params: listing } }) {
	return (
		<KeyboardAvoidingView
			behavior='position'
			keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}>
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
				<Image
					style={styles.image}
					preview={{ uri: listing.images[0].thumbnailUrl }}
					uri={listing.images[0].url}
					tint='light'
				/>
				<View style={styles.detailsContainer}>
					<Text style={styles.title}>{listing.title}</Text>
					<Text style={styles.price}>${listing.price}</Text>
					<View>
						<ListItem
							title='Mosh Hamedani'
							subTitle='5 Listings'
							image={require('../assets/mosh.jpg')}
						/>
					</View>
					<ContactSellerForm listing={listing} />
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}

const styles = StyleSheet.create({
	image: { height: 300, width: '100%' },
	detailsContainer: { marginLeft: 15, marginVertical: 20, marginBottom: 40 },
	title: { fontSize: 24, marginVertical: 10 },
	price: { color: colors.secondary, fontSize: 18, fontWeight: '500' }
})

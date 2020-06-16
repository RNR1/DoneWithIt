import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { Image } from 'react-native-expo-image-cache'

import colors from '../config/colors'
import Text from './Text'

export default function Card({
	title,
	subTitle,
	imageUrl,
	onPress,
	thumbnailUrl
}) {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View style={styles.container}>
				<View style={styles.card}>
					<Image
						style={styles.image}
						tint='light'
						preview={{ uri: thumbnailUrl }}
						uri={imageUrl}
					/>
					<View style={styles.detailsContainer}>
						<Text numberOfLines={1} style={styles.title}>
							{title}
						</Text>
						<Text numberOfLines={2} style={styles.subTitle}>
							{subTitle}
						</Text>
					</View>
				</View>
			</View>
		</TouchableWithoutFeedback>
	)
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center'
	},
	card: {
		marginTop: 20,
		borderRadius: 20,
		height: 260,
		width: '90%',
		backgroundColor: colors.white,
		overflow: 'hidden'
	},
	image: {
		width: '100%',
		height: 170
	},
	detailsContainer: { marginTop: 15, marginLeft: 15 },
	title: { fontSize: 16, lineHeight: 35 },
	subTitle: { color: colors.secondary, fontSize: 16, fontWeight: 'bold' }
})

import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

import colors from '../config/colors'
import AppText from './Text'

export default function Card({ title, subTitle, image }) {
	return (
		<View style={styles.container}>
			<View style={styles.card}>
				<Image source={image} style={styles.image} />
				<View style={styles.detailsContainer}>
					<AppText numberOfLines={1} style={styles.title}>
						{title}
					</AppText>
					<AppText numberOfLines={2} style={styles.subTitle}>
						{subTitle}
					</AppText>
				</View>
			</View>
		</View>
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

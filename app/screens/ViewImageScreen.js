import React from 'react'
import {
	View,
	StyleSheet,
	SafeAreaView,
	Platform,
	StatusBar,
	Image
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import Chair from '../assets/chair.jpg'
import colors from '../config/colors'

export default function ViewImageScreen() {
	return (
		<View style={styles.container}>
			<SafeAreaView style={styles.buttonsContainer}>
				<MaterialCommunityIcons
					name='close'
					style={styles.icon}></MaterialCommunityIcons>
				<MaterialCommunityIcons
					name='trash-can-outline'
					style={styles.icon}></MaterialCommunityIcons>
			</SafeAreaView>
			<View style={styles.imageContainer}>
				<Image source={Chair} style={styles.image} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: colors.black },
	buttonsContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
		margin: 20
	},
	icon: { fontSize: 30, color: colors.white },
	imageContainer: { flex: 1 },
	image: { resizeMode: 'contain', width: '100%', height: '100%' }
})

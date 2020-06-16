import React from 'react'
import { View, StyleSheet } from 'react-native'
import LottieView from 'lottie-react-native'
import colors from '../config/colors'

export default function ActivityIndicator({ visible = false }) {
	if (!visible) return null
	return (
		<View styles={styles.overlay}>
			<LottieView
				source={require('../assets/animations/loader.json')}
				autoPlay
				loop
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	overlay: {
		height: '100%',
		position: 'absolute',
		width: '100%',
		zIndex: 1,
		backgroundColor: colors.white,
		opacity: 0.8
	}
})

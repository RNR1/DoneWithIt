import React from 'react'
import { View, StyleSheet } from 'react-native'
import LottieView from 'lottie-react-native'

export default function ActivityIndicator({ visible = false }) {
	if (!visible) return null
	return (
		<LottieView
			source={require('../assets/animations/loader.json')}
			autoPlay
			loop
		/>
	)
}

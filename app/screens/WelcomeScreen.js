import React from 'react'
import {
	ImageBackground,
	Image,
	View,
	SafeAreaView,
	StyleSheet,
	Text
} from 'react-native'

import Button from '../components/Button'
const WelcomeImage = require('../assets/background.jpg')
const Logo = require('../assets/logo-red.png')

export default function WelcomeScreen() {
	return (
		<ImageBackground
			source={WelcomeImage}
			style={styles.background}
			blurRadius={10}>
			<View style={styles.logoContainer}>
				<Image source={Logo} style={styles.logo} />
				<Text style={styles.tagline}>Sell What You Don't Need</Text>
			</View>
			<SafeAreaView style={styles.buttonContainer}>
				<Button title='Login' />
				<Button color='secondary' title='Register' />
			</SafeAreaView>
		</ImageBackground>
	)
}

const styles = StyleSheet.create({
	background: { flex: 1 },
	logoContainer: { flex: 0.4, alignItems: 'center', justifyContent: 'center' },
	logo: { width: 100, height: 100, marginBottom: 10 },
	tagline: { fontSize: 20, fontWeight: 'bold' },
	buttonContainer: {
		flex: 0.6,
		justifyContent: 'flex-end',
		alignItems: 'center',
		margin: 15
	}
})

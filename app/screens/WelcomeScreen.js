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
import routes from '../navigation/routes'
const WelcomeImage = require('../assets/background.jpg')
const Logo = require('../assets/logo-red.png')

export default function WelcomeScreen({ navigation }) {
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
				<Button
					title='Login'
					onPress={() => navigation.navigate(routes.LOGIN)}
				/>
				<Button
					color='secondary'
					title='Register'
					onPress={() => navigation.navigate(routes.REGISTER)}
				/>
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

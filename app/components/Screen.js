import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import Constants from 'expo-constants'
import colors from '../config/colors'

export default function Screen({ children }) {
	return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>
}

const styles = StyleSheet.create({
	screen: {
		paddingTop: Constants.statusBarHeight,
		backgroundColor: colors.white,
		flex: 1
	}
})

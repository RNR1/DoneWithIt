import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../config/colors'

export default function Button({ title, onPress, color = 'primary' }) {
	return (
		<TouchableOpacity
			style={[styles.button, { backgroundColor: colors[color] }]}
			onPress={onPress}>
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		padding: 15,
		borderRadius: 25,
		margin: 5,
		backgroundColor: colors.primary
	},
	text: {
		color: colors.white,
		fontWeight: 'bold',
		textTransform: 'uppercase',
		fontSize: 18
	}
})

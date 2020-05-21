import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import AppText from '../Text'
import Icon from '../Icon'

export default function CategoryPickerItem({ item, onPress }) {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.item}>
				<Icon
					name={item.icon}
					backgroundColor={item.backgroundColor}
					size={80}
				/>
				<AppText style={styles.text}>{item.label}</AppText>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	item: {
		alignItems: 'center',
		paddingHorizontal: 20,
		paddingVertical: 15
	},
	text: { marginTop: 5, textAlign: 'center' }
})

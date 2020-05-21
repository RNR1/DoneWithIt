import React from 'react'
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../../config/colors'

export default function ListItemDeleteAction({ onPress }) {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View style={styles.container}>
				<MaterialCommunityIcons name='trash-can' size={35} color='#fff' />
			</View>
		</TouchableWithoutFeedback>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.danger,
		width: 70,
		justifyContent: 'center',
		alignItems: 'center'
	}
})

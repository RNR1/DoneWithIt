import React from 'react'
import { View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function Icon({
	name,
	size = 40,
	backgroundColor = '#000',
	color = '#fff'
}) {
	return (
		<View
			style={{
				width: size,
				height: size,
				borderRadius: size / 2,
				backgroundColor,
				justifyContent: 'center',
				alignItems: 'center'
			}}>
			<MaterialCommunityIcons size={size * 0.5} name={name} color={color} />
		</View>
	)
}

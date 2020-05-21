import React from 'react'
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Swipeable from 'react-native-gesture-handler/Swipeable'

import colors from '../../config/colors'
import AppText from '../Text'

export default function ListItem({
	title,
	subTitle,
	image,
	IconComponent,
	onPress,
	renderRightActions,
	showChevron
}) {
	return (
		<Swipeable renderRightActions={renderRightActions}>
			<TouchableHighlight
				style={styles.container}
				underlayColor={colors.light}
				onPress={onPress}>
				<View style={styles.listItem}>
					{IconComponent}
					{image && <Image source={image} style={styles.image} />}
					<View style={styles.detailsContainer}>
						<AppText numberOfLines={1} style={styles.title}>
							{title}
						</AppText>
						{subTitle && (
							<AppText numberOfLines={2} style={styles.subTitle}>
								{subTitle}
							</AppText>
						)}
					</View>
					{showChevron && (
						<MaterialCommunityIcons
							name='chevron-right'
							size={25}
							color={colors.medium}
						/>
					)}
				</View>
			</TouchableHighlight>
		</Swipeable>
	)
}

const styles = StyleSheet.create({
	container: { backgroundColor: colors.white, padding: 15 },
	listItem: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	detailsContainer: { marginLeft: 10, flex: 1 },
	image: { height: 70, width: 70, borderRadius: 35 },
	title: {
		fontSize: 18,
		marginBottom: 3,
		color: colors.black,
		fontWeight: '500'
	},
	subTitle: { fontSize: 16, color: colors.medium }
})

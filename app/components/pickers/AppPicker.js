import React, { useState } from 'react'
import {
	StyleSheet,
	View,
	TouchableWithoutFeedback,
	Modal,
	Button,
	FlatList
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import defaultStyles from '../../config/styles'
import AppText from '../Text'
import Screen from '../Screen'
import PickerItem from './PickerItem'

export default function AppPicker({
	icon,
	onSelectItem,
	placeholder,
	items,
	numberOfColumns = 1,
	PickerItemComponent = PickerItem,
	selectedItem,
	width = '100%'
}) {
	const [modalVisible, setModalVisible] = useState(false)
	return (
		<>
			<TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
				<View style={[styles.container, { width }]}>
					{icon && (
						<MaterialCommunityIcons
							name={icon}
							size={20}
							color={defaultStyles.colors.medium}
							style={styles.icon}
						/>
					)}
					{selectedItem ? (
						<AppText style={styles.text}>{selectedItem.label}</AppText>
					) : (
						<AppText style={styles.placeholder}>{placeholder}</AppText>
					)}
					<MaterialCommunityIcons
						name='chevron-down'
						size={20}
						color={defaultStyles.colors.medium}
					/>
				</View>
			</TouchableWithoutFeedback>
			<Modal visible={modalVisible} animationType='slide'>
				<Screen>
					<Button title='Close' onPress={() => setModalVisible(false)} />
					<FlatList
						numColumns={numberOfColumns}
						data={items}
						keyExtractor={(item) => item.id.toString()}
						renderItem={({ item }) => (
							<PickerItemComponent
								item={item}
								onPress={() => {
									setModalVisible(false)
									onSelectItem(item)
								}}
							/>
						)}
					/>
				</Screen>
			</Modal>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: defaultStyles.colors.light,
		borderRadius: 25,
		flexDirection: 'row',
		padding: 15,
		marginVertical: 10
	},
	icon: { marginRight: 10 },
	placeholder: { flex: 1, color: defaultStyles.colors.medium },
	text: { flex: 1 }
})

import React, { useEffect } from 'react'
import {
	StyleSheet,
	View,
	Image,
	TouchableWithoutFeedback,
	Alert
} from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'

export default function ImageInput({ imageUri, onChangeImage }) {
	useEffect(() => {
		requestPermission()
	}, [])

	const requestPermission = async () => {
		const { granted } = await ImagePicker.requestCameraPermissionsAsync()
		if (!granted) alert('You need to enable permission to access the library')
	}

	const onPress = () => {
		if (!imageUri) selectImage()
		else
			Alert.alert('Delete', 'Are you sure you want to delete this image?', [
				{ text: 'Yes', onPress: () => onChangeImage(null) },
				{ text: 'No' }
			])
	}

	const selectImage = async () => {
		try {
			const result = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				quality: 0.5
			})
			if (!result.cancelled) onChangeImage(result.uri)
		} catch (error) {
			console.log('Error reading an image', error)
		}
	}

	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View style={styles.container}>
				{imageUri ? (
					<Image source={{ uri: imageUri }} style={styles.Image} />
				) : (
					<MaterialCommunityIcons name='camera' style={styles.CameraIcon} />
				)}
			</View>
		</TouchableWithoutFeedback>
	)
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: colors.light,
		borderRadius: 15,
		height: 100,
		justifyContent: 'center',
		overflow: 'hidden',
		width: 100
	},
	CameraIcon: {
		fontSize: 40,
		color: colors.medium
	},
	Image: {
		width: '100%',
		height: '100%'
	}
})

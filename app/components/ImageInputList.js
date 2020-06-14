import React, { useRef } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import ImageInput from './ImageInput'

export default function ImageInputList({
	imageUris = [],
	onAddImage,
	onRemoveImage
}) {
	const scrollView = useRef()
	return (
		<View style={styles.container}>
			<ScrollView
				ref={scrollView}
				horizontal
				onContentSizeChange={() => scrollView.current.scrollToEnd()}>
				{imageUris.map((uri) => (
					<View key={uri} style={styles.image}>
						<ImageInput
							imageUri={uri}
							onChangeImage={() => onRemoveImage(uri)}
						/>
					</View>
				))}
				<ImageInput onChangeImage={(uri) => onAddImage(uri)} />
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row'
	},
	image: {
		marginRight: 10
	}
})

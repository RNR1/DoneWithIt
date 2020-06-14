import React from 'react'
import { useFormikContext } from 'formik'

import ErrorMessage from './ErrorMessage'
import ImageInputList from '../ImageInputList'

export default function FormImagePicker({ name }) {
	const { errors, setFieldValue, touched, values } = useFormikContext()
	const imageUris = values[name]

	const onAddImage = (uri) => {
		setFieldValue(name, [...imageUris, uri])
	}

	const onRemoveImage = (uri) => {
		setFieldValue(
			name,
			imageUris.filter((imageUri) => imageUri !== uri)
		)
	}

	return (
		<>
			<ImageInputList
				imageUris={imageUris}
				onAddImage={onAddImage}
				onRemoveImage={onRemoveImage}
			/>
			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</>
	)
}

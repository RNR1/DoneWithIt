import React from 'react'
import { useFormikContext } from 'formik'

import TextInput from '../TextInput'
import ErrorMessage from './ErrorMessage'

export default function FormField({ name, ...otherProps }) {
	const {
		setFieldTouched,
		setFieldValue,
		errors,
		touched,
		values
	} = useFormikContext()
	return (
		<>
			<TextInput
				onBlur={() => setFieldTouched(name)}
				onChangeText={(text) => setFieldValue(name, text)}
				value={values[name]}
				{...otherProps}
			/>
			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</>
	)
}

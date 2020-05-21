import React from 'react'
import { useFormikContext } from 'formik'

import ErrorMessage from './ErrorMessage'
import AppPicker from '../pickers/AppPicker'

export default function FormPicker({
	items,
	name,
	numberOfColumns,
	placeholder,
	width,
	PickerItemComponent
}) {
	const { setFieldValue, errors, touched, values } = useFormikContext()
	return (
		<>
			<AppPicker
				items={items}
				numberOfColumns={numberOfColumns}
				onSelectItem={(item) => setFieldValue(name, item)}
				placeholder={placeholder}
				selectedItem={values[name]}
				width={width}
				PickerItemComponent={PickerItemComponent}
			/>
			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</>
	)
}

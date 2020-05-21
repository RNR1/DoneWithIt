import React from 'react'
import { StyleSheet } from 'react-native'
import * as Yup from 'yup'

import Screen from '../components/Screen'
import {
	FormField as Field,
	Form,
	FormPicker as Picker,
	SubmitButton as Submit
} from '../components/forms'
import { CategoryPickerItem } from '../components/pickers'
import categories from '../config/categories.json'

const validationSchema = Yup.object().shape({
	title: Yup.string().required().min(1).label('Title'),
	price: Yup.number().required().min(1).max(10000).label('Price'),
	category: Yup.string().required().nullable().label('Category'),
	description: Yup.string().label('Description')
})

export default function ListingEditScreen() {
	return (
		<Screen>
			<Form
				initialValues={{
					title: '',
					price: '',
					category: null,
					description: ''
				}}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}>
				<Field maxLength={255} name='title' placeholder='Title' />
				<Field
					keyboardType='numeric'
					maxLength={8}
					name='price'
					placeholder='Price'
					width='30%'
				/>
				<Picker
					items={categories}
					name='category'
					numberOfColumns={3}
					PickerItemComponent={CategoryPickerItem}
					placeholder='Category'
					width='50%'
				/>
				<Field
					maxLength={255}
					multiline
					name='description'
					numberOfLines={3}
					placeholder='Description'
				/>
				<Submit title='Post' />
			</Form>
		</Screen>
	)
}

const styles = StyleSheet.create({})

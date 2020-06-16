import React from 'react'
import { View, StyleSheet, Keyboard, Alert } from 'react-native'
import * as Yup from 'yup'
import { Notifications } from 'expo'

import messagesApi from '../api/messages'
import { Form, FormField as Field, SubmitButton as Submit } from './forms'

const validationSchema = Yup.object().shape({
	message: Yup.string().required("You can't send an empty message")
})

export default function ContactSellerForm({ listing }) {
	const handleSubmit = async ({ message }, { resetForm }) => {
		Keyboard.dismiss()

		const result = await messagesApi.send(message, listing.id)

		if (!result.ok) {
			console.log('Error', result)
			return Alert.alert('Error', 'Could not send the message to the seller')
		}

		resetForm()

		Notifications.presentLocalNotificationAsync({
			title: 'Awesome!',
			body: 'Your message was sent to the seller.'
		})
	}

	return (
		<Form
			initialValues={{ message: '' }}
			validationSchema={validationSchema}
			onSubmit={handleSubmit}>
			<View style={styles.container}>
				<Field name='message' placeholder='Message...' />
				<Submit title='Contact Seller' />
			</View>
		</Form>
	)
}

const styles = StyleSheet.create({
	container: {}
})

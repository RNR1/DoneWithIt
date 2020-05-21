import React from 'react'
import { StyleSheet, Image } from 'react-native'
import * as Yup from 'yup'

import Screen from '../components/Screen'
import { Form, FormField, SubmitButton } from '../components/forms'

const validationSchema = Yup.object().shape({
	name: Yup.string().required().min(2).label('Name'),
	email: Yup.string().required().email().label('Email'),
	password: Yup.string().required().min(4).label('Password')
})

export default function RegisterScreen() {
	return (
		<Screen style={styles.container}>
			<Image style={styles.logo} source={require('../assets/logo-red.png')} />
			<Form
				initialValues={{ name: '', email: '', password: '' }}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}>
				<FormField
					autoCapitalize='words'
					autoCorrect={false}
					icon='account'
					name='name'
					placeholder='Name'
					textContentType='name'
				/>
				<FormField
					autoCapitalize='none'
					autoCorrect={false}
					icon='email'
					name='email'
					placeholder='Email'
					keyboardType='email-address'
					textContentType='emailAddress'
				/>
				<FormField
					autoCapitalize='none'
					autoCorrect={false}
					icon='lock'
					name='password'
					placeholder='Password'
					secureTextEntry
					textContentType='password'
				/>
				<SubmitButton title='Register' />
			</Form>
		</Screen>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 10
	},
	logo: {
		width: 80,
		height: 80,
		alignSelf: 'center',
		marginTop: 50,
		marginBottom: 20
	}
})

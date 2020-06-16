import React, { useState } from 'react'
import { StyleSheet, Image } from 'react-native'
import * as Yup from 'yup'

import Screen from '../components/Screen'
import {
	Form,
	FormField as Field,
	SubmitButton,
	ErrorMessage
} from '../components/forms'
import usersApi from '../api/users'
import authApi from '../api/auth'
import useAuth from '../auth/useAuth'
import useApi from '../hooks/useApi'
import ActivityIndicator from '../components/ActivityIndicator'

const validationSchema = Yup.object().shape({
	name: Yup.string().required().min(2).label('Name'),
	email: Yup.string().required().email().label('Email'),
	password: Yup.string().required().min(4).label('Password')
})

export default function RegisterScreen() {
	const [error, setError] = useState()

	const registerApi = useApi(usersApi.register)
	const loginApi = useApi(authApi.login)
	const { logIn } = useAuth()

	const handleSubmit = async (userInfo) => {
		const result = await registerApi.request(userInfo)
		if (!result.ok) {
			if (result.data) setError(result.data.error)
			else {
				setError('An unexpected error occured.')
				console.log(result)
			}
			return
		}

		const { data: authToken } = await loginApi.request(
			userInfo.email,
			userInfo.password
		)
		logIn(authToken)
	}

	return (
		<>
			<ActivityIndicator visible={registerApi.loading || loginApi.loading} />
			<Screen style={styles.container}>
				<Image style={styles.logo} source={require('../assets/logo-red.png')} />
				<Form
					initialValues={{ name: '', email: '', password: '' }}
					onSubmit={handleSubmit}
					validationSchema={validationSchema}>
					<ErrorMessage error={error} visible={error} />
					<Field
						autoCapitalize='words'
						autoCorrect={false}
						icon='account'
						name='name'
						placeholder='Name'
						textContentType='name'
					/>
					<Field
						autoCapitalize='none'
						autoCorrect={false}
						icon='email'
						name='email'
						placeholder='Email'
						keyboardType='email-address'
						textContentType='emailAddress'
					/>
					<Field
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
		</>
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

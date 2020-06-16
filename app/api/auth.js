import client from './client'

const login = (email, password) => {
	return client.post('/auth', { email, password })
}

export default { login }

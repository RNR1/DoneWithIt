import { useContext } from 'react'
import AuthContext from './context'
import authStorage from './storage'
import JwtDecode from 'jwt-decode'

export default useAuth = () => {
	const { user, setUser } = useContext(AuthContext)

	const logIn = (authToken) => {
		const user = JwtDecode(authToken)
		setUser(user)
		authStorage.storeToken(authToken)
	}

	const logOut = () => {
		setUser(null)
		authStorage.removeToken()
	}

	return { user, logIn, logOut }
}

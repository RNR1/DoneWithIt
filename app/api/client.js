import { create } from 'apisauce'
import cache from '../util/cache'

const apiClient = create({
	baseURL: 'http://10.0.0.10:9000/api'
})

const get = apiClient.get
apiClient.get = async (url, params, axiosConfig) => {
	const response = await get(url, params, axiosConfig)

	if (response.ok) {
		cache.store(url, response.data)
		return response
	}

	const data = await cache.get(url)
	return data ? { ok: true, data } : response
}

export default apiClient

import axios from 'axios'
import { API_URL } from '../ApiConstanst'

export const dastScanner = async (data, token) => {
  const url = `${API_URL}/api/DAST/start-owasp`

  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json'
  }

  try {
    const response = await axios.post(url, data, { headers })

    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

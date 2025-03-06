import axios from 'axios'

export const dastScanner = async (data, token) => {
  const url = 'https://api.threatreaper.io/api/DAST/start-owasp'

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

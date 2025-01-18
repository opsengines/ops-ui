import axios from 'axios'

export const login = async ({ email, password }) => {
  const url = 'https://api.opsengines.io/token'

  // Headers
  const headers = {
    accept: 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded'
  }

  // Data (form-urlencoded)
  const data = new URLSearchParams()

  data.append('grant_type', 'password')
  data.append('username', `${email}`)
  data.append('password', `${password}`)
  data.append('scope', '')
  data.append('client_id', 'string')
  data.append('client_secret', 'string')

  try {
    const response = await axios.post(url, data, { headers })

    return response.data // Return the response data
  } catch (error) {
    console.error('Error:', error.response?.data || error.message)
    throw error // Re-throw the error for the caller to handle
  }
}

export const userInfo = async token => {
  const url = 'https://api.opsengines.io/users/me/'

  const headers = {
    Authorization: `Bearer ${token}`
  }

  try {
    const response = await axios.get(url, { headers }) // Pass headers inside the config object

    return response.data // Return the response data
  } catch (error) {
    console.error('Error:', error.response?.data || error.message)
    throw error // Re-throw the error for the caller to handle
  }
}

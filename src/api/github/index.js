import axios from 'axios'

export const storeGithubInfo = async (data, token) => {
  const url = 'https://api.threatreaper.io/api/utils/storegitusers/'

  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json'
  }

  try {
    const response = await axios.post(url, data, { headers })

    return response.data
  } catch (error) {
    console.error('Error:', error.response?.data || error.message)
    throw error
  }
}

export const getGitInfo = async token => {
  const url = 'https://api.threatreaper.io/api/utils/fetchgitusers'

  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json'
  }

  try {
    const response = await axios.get(url, { headers })

    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

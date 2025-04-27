import axios from 'axios'

import { API_URL } from '../ApiConstanst'

export const storeGithubInfo = async (data, token) => {
  const url = `${API_URL}/api/utils/storegitusers/`

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
  const url = `${API_URL}/api/utils/fetchgitusers`

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

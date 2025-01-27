import axios from 'axios'

export const getConnectorStatus = async token => {
  const url = 'https://api.opsengines.io/api/utils/connectors'

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

export const configureAwsCredentials = async (token, data) => {
  const url = 'https://api.opsengines.io/api/cloud/store-aws-credentials'

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

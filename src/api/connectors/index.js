import axios from 'axios'

import { API_URL } from '../ApiConstanst'

export const getConnectorStatus = async token => {
  const url = `${API_URL}/api/utils/connectors`

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
  const myHeaders = new Headers()

  myHeaders.append('accept', 'application/json')
  myHeaders.append('Authorization', `Bearer ${token}`)
  myHeaders.append('Content-Type', 'application/json')

  const raw = JSON.stringify({
    aws_access_key_id: data?.aws_access_key_id,
    aws_secret_access_key: data?.aws_secret_access_key,
    region: data?.region
  })

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  }

  const response = await fetch('https://api.opsengines.io/api/cloud/store-aws-credentials/', requestOptions)
    .then(response => response)
    .then(result => result)
    .catch(error => console.error(error))

  return response
}

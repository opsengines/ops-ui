import axios from 'axios'
import { API_URL } from '../ApiConstanst'

export const semgrepScanner = async (data, token) => {
  const url = `${API_URL}/api/sast/semgrepscanner`

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

export const semgrepScanInfo = async (data, token) => {
  console.log('Token:', token)
  console.log(data)
  const url = `${API_URL}/api/sast/semgrep_scan_status/`

  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json'
  }

  try {
    const response = await axios.post(url, data, { headers })

    return response
  } catch (error) {
    console.error(error)
    throw error
  }
}

import axios from 'axios'

import { API_URL } from '../ApiConstanst'

export const getSASTDashboard = async token => {
  const myHeaders = new Headers()

  myHeaders.append('accept', 'application/json')
  myHeaders.append('Authorization', `Bearer ${token}`)

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  }

  try {
    const response = await fetch(`${API_URL}/scan-stats?scan_category=SAST`, requestOptions)

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const jsonResponse = await response.json() // ✅ Convert response to JSON

    return jsonResponse
  } catch (error) {
    return null
  }
}

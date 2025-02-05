import axios from 'axios'

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
    const response = await fetch('https://api.opsengines.io/scan-stats?scan_category=SAST', requestOptions)

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const jsonResponse = await response.json() // ✅ Convert response to JSON

    return jsonResponse
  } catch (error) {
    return null
  }
}

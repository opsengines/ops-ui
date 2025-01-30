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

  const response = await fetch('https://api.opsengines.io/scan-stats?scan_category=SAST', requestOptions)
    .then(response => response)
    .then(result => result)
    .catch(error => console.error(error))

  return response
}

import axios from 'axios'

export const getCspmScanResult = async (data, token) => {
  const url = 'https://api.opsengines.io/api/cloud/aws_scan_status/'

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

export const prowlerCloudScan = async token => {
  const myHeaders = new Headers()

  myHeaders.append('accept', 'application/json')
  myHeaders.append('Authorization', `Bearer ${token}`)
  myHeaders.append('Content-Type', 'application/json')

  const raw = JSON.stringify(['string'])

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    redirect: 'follow'
  }

  const response = await fetch('https://api.threatreaper.io/api/cloud/scan-cloud-prowler-aws/', requestOptions)
    .then(response => response)
    .then(result => result)
    .catch(error => console.error(error))

  return response
}

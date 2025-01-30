export const getAiFix = async (token, data) => {
  const myHeaders = new Headers()

  myHeaders.append('accept', 'application/json')
  myHeaders.append('Authorization', `Bearer ${token}`)
  myHeaders.append('Content-Type', 'application/json')

  const raw = JSON.stringify({
    scan_data: { ...data }
  })

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  }

  try {
    const response = await fetch('https://api.opsengines.io/ai-suggest-fixes', requestOptions)

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const jsonResponse = await response.json() // ✅ Parse response as JSON

    return jsonResponse
  } catch (error) {
    console.error('Error fetching AI fix:', error)

    return null
  }
}

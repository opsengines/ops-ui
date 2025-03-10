export const scanEngine = async data => {
  try {
    let token = localStorage?.getItem('authToken')

    const response = await fetch('https://api.threatreaper.io/api/engine/scan', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(data)
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const result = await response.json()

    return result
  } catch (error) {
    console.error('Error in API call:', error)

    return { error: error.message }
  }
}

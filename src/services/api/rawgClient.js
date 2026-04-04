const BASE_URL = 'https://api.rawg.io/api'

export async function fetchFromRawg(endpoint, params = {}) {
    const apiKey = import.meta.env.VITE_RAWG_API_KEY

    const searchParams = new URLSearchParams({
        key: apiKey,
        ...params,
    })

    const response = await fetch(`${BASE_URL}${endpoint}?${searchParams.toString()}`)

    if (!response.ok) {
        throw new Error(`RAWG request failed: ${response.status}`)
    }

    return response.json()
}

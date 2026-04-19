const BASE_URL = 'https://api.rawg.io/api'

export async function fetchFromRawg(endpoint, params = {}, options = {}) {
    const apiKey = import.meta.env.VITE_RAWG_API_KEY

    const { signal } = options

    if (!apiKey) {
        throw new Error('RAWG API key is missing. Set VITE_RAWG_API_KEY in .env')
    }

    const searchParams = new URLSearchParams({
        key: apiKey,
        ...params,
    })

    const response = await fetch(`${BASE_URL}${endpoint}?${searchParams.toString()}`, { signal })

    if (!response.ok) {
        throw new Error(`RAWG request failed: ${response.status}`)
    }

    return response.json()
}

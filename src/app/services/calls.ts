'use server'

export const getCharacteres = async (status?: string | null) => {

    let url = "https://rickandmortyapi.com/api/character";

    if (status) {
        url += '?status='+ status.toLowerCase()
    }
    
    const res = await fetch(url)

    const body = res.json()

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return body
}
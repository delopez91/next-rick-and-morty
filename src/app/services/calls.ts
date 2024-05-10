'use server'

export const getEpisode = async (url: string) => {

    const res = await fetch(url)

    const body = await res.json()

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return body
}

export const getCharacteres = async (status?: string | null, name?: string, page?: string | number) => {

    let url = "https://rickandmortyapi.com/api/character";

    if (page) {
        url += '?page=' + page
    }

    if (status) {
        url += '&status='+ status.toLowerCase()
    }

    if (name) {
        url += '&name='+ name.toLowerCase()
    }

    const res = await fetch(url)

    const body = await res.json()

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return body
}
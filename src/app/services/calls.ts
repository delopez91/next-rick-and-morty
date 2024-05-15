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

    if (!res.ok && body.error != 'There is nothing here')  {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    if (body.error  == 'There is nothing here') {
        return {
            info: { count: 0, pages: 0, next: null, prev: null },
            results: []
        }
    }

    return body
}
export const getMoviesData = async (endpoint: string) => {

    const result = await fetch(`${import.meta.env.VITE_API_ORIGIN}${endpoint}`, {
        method: "GET"
    })

    if (!result.ok) throw Error(result.statusText)

    const data = await result.json()

    return data
}
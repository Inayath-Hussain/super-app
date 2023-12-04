import { getNewsData } from "@/services/newsApi"
import { useState, useEffect } from "react"

interface Iarticle {
    title: string,
    content: string
    publishedAt: string
    urlToImage: string
}

interface Idata {
    articles: Iarticle[]
}

export type Inews = Idata | null

let a = new Date()
const useNewsApi = () => {
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState<Inews>(null);
    const [error, setError] = useState(false);


    useEffect(() => {
        const call = async () => {

            setIsLoading(true)
            const d = await getNewsData(page);

            if (d === null) {
                setIsLoading(false)
                setError(true)
            }
            else {
                setIsLoading(false)
                setData(d)
            }
        }

        call()
    }, [])

    return {
        isLoading,
        data,
        error
    }
}

export default useNewsApi;
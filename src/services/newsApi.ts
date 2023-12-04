import { Inews } from "@/hooks/useNews";


export const getNewsData = async (page = 1): Promise<Inews> => {
    try {
        const result = await fetch("http://localhost:3000/api/news", {
            method: "GET"
        })

        if (!result.ok) {
            throw Error(`status code - ${result.status}; statusText - ${result.statusText}`)
        }

        const data = await result.json();
        return data
    } catch (ex) {
        console.log("newsApi...", ex)

        return null;
    }
}
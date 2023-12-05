import { Inews } from "@/hooks/useNews";

// @ts-ignore
export const getNewsData = async (page = 1): Promise<Inews> => {
    try {
        const result = await fetch(`${import.meta.env.VITE_API_ORIGIN}/api/news`, {
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
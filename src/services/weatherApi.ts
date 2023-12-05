import { Iweather } from "@/hooks/useWeather"
import { getLocation, getLocationQueryString } from "@/utilities/location/getLocation"

export const getWeatherData = async (): Promise<Iweather> => {
    try {
        let userLocation = await getLocation()

        const result = await fetch(`${import.meta.env.VITE_API_ORIGIN}/api/weather?${userLocation ? getLocationQueryString(userLocation) : ""}`, {
            method: "GET"
        })

        if (result.ok) {
            const data = await result.json()
            return data
        }
        else {
            throw Error(`status code - ${result.status}, statusText - ${result.statusText}`)
        }
    } catch (ex) {
        console.log("weatherApi....", ex)
        return null;
    }
}
import { getWeatherData } from "@/services/weatherApi";
import { useEffect, useState } from "react";

interface Idata {
    current: {
        cloud: number,
        condition: {
            code: number
            icon: string
            text: string
        }
        humidity: number
        pressure_mb: number
        temp_c: number
        wind_kph: number
    }
}

export type Iweather = Idata | null

/**
 * provides weather data and loader status
 */
const useWeatherApi = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState<Iweather>(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        const call = async () => {

            setIsLoading(true)
            const d = await getWeatherData()

            if (d === null) {
                setIsLoading(false)
                setError(true)
                return
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

export default useWeatherApi;
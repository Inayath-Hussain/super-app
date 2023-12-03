import { getLocation, getLocationQueryString } from "@/utilities/location/getLocation";
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

/**
 * provides weather data and loader status
 */
const useWeather = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState<Idata | null>(null);

    useEffect(() => {
        const call = async () => {
            setIsLoading(true)

            let userLocation = await getLocation()

            const result = await fetch(`http://localhost:3000/api/weather?${userLocation ? getLocationQueryString(userLocation) : ""}`, {
                method: "GET"
            })

            console.log(result)


            result.json().then((data) => {
                console.log(data)
                setData(data)
                setIsLoading(false)
            })


        }

        call()

    }, [])


    return {
        isLoading,
        data
    }
}

export default useWeather;
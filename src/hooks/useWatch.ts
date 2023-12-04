import { getDateAndTime } from "@/utilities/dateTime/dateTime";
import { Dispatch, SetStateAction } from "react";

interface Iparams {
    setDate: Dispatch<SetStateAction<string>>
    setTime: Dispatch<SetStateAction<string>>
}

/**
 * Provides updated date and time.
 * Requires two state variable setter functions, one for date and another for time. 
 * @param setDate setter function for date
 * @param setTime setter function for time
 */
const useWatch = ({ setDate, setTime }: Iparams) => {

    let id: NodeJS.Timeout;

    const subscribe = () => {

        const call = () => {
            const { date: d, time: t, seconds } = getDateAndTime()
            setDate(d)
            setTime(t)

            let timeoutInSec = 60 - seconds
            console.log(timeoutInSec)

            id = setTimeout(() => {
                console.log('call')
                call();
            }, timeoutInSec * 1000)

            console.log('subscribe id', id)
        }

        call()

    }

    const unSubscribe = () => {
        console.log('unsubscribe id', id)
        clearTimeout(id)
    }

    return {
        subscribe,
        unSubscribe
    }
}

export default useWatch;
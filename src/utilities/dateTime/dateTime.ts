import { prependZero } from "./prePendZero"

type Imeridiem = 'AM' | 'PM'

/**
 * @returns date in dd-mm-yyyy format and time in 12hr format
 */
export const getDateAndTime = (dateObj: Date = new Date()) => {

    const date = `${dateObj.getMonth() + 1}-${dateObj.getDate()}-${dateObj.getFullYear()}`

    let hour = dateObj.getHours()
    let minutes: number | string = dateObj.getMinutes()
    let seconds = dateObj.getSeconds()
    let meridiem: Imeridiem = 'AM'

    if (hour === 0) {
        hour = 12
    }

    if (hour > 12) {
        hour -= 12
        meridiem = 'PM'
    }

    hour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour

    const time = `${prependZero(hour)}:${prependZero(minutes)} ${meridiem}`


    // time and seconds
    return {
        date,
        time,
        seconds
    }
}
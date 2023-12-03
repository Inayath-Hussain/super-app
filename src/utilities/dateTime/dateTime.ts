type Imeridiem = 'am' | 'pm'

export const getCurrentDateTime = () => {
    const currentTime = new Date();
    const date = `${currentTime.getMonth()}-${currentTime.getDate()}-${currentTime.getFullYear()}`

    let hour = currentTime.getHours()
    let minutes: number | string = currentTime.getMinutes()
    let seconds = currentTime.getSeconds()
    let meridiem: Imeridiem = 'am'

    if (hour === 0) {
        hour = 12
    }

    if (hour > 12) {
        hour -= 12
        meridiem = 'pm'
    }

    hour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour

    if (minutes < 10) {
        minutes = '0' + minutes
    }

    const time = `${hour}:${minutes} ${meridiem}`


    // time and seconds
    return {
        date,
        time,
        seconds
    }
}
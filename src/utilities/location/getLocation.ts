interface IRejectReason {
    code: number,
    message: string
}

/**
 * provides userLocation only if user agrees to share their location
 */
export const getLocation = async () => {
    try {
        const userLocation = await new Promise((resolve: (value: GeolocationPosition) => void, reject: (reason: IRejectReason) => void) => {
            window.navigator.geolocation.getCurrentPosition(resolve, reject, { enableHighAccuracy: true })
        })

        return userLocation
    }
    catch (ex) {
        console.log(ex)

        return undefined
    }
}


/**
 * @returns url query string of user's latitude and longitude
 */
export const getLocationQueryString = (location: GeolocationPosition) => {
    return `location=${location.coords.latitude},${location.coords.longitude}`
}
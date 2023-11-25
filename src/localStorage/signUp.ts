const key = 'userData'

export const getUserData = () => {
    return localStorage.getItem(key)
}

export const isUserSignedIn = () => {
    if (localStorage.getItem(key)) return true
    return false
}

export const saveUserData = (data: any) => {
    localStorage.setItem(key, JSON.stringify(data))
}
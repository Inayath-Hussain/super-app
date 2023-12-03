import { IFormState } from "@/pages/registeration/registeration"

const key = 'userData'

export const getUserData = (): IFormState | null => {
    const data = localStorage.getItem(key)
    if (data) {
        return JSON.parse(data)
    }

    return null
}

export const isUserSignedIn = () => {
    if (localStorage.getItem(key)) return true
    return false
}

export const saveUserData = (data: any) => {
    localStorage.setItem(key, JSON.stringify(data))
}
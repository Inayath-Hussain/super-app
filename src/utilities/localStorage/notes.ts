const key = "allNotes"

export const saveNotesToLS = (text: string) => {
    localStorage.setItem(key, text)
}

export const getNotesFromLS = () => {
    return localStorage.getItem(key)
}
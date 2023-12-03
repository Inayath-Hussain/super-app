import { ICategories } from "@/pages/category/category"

const key = 'user-categories'

export const saveCategoriesToLS = (categories: ICategories[]) => {
    localStorage.setItem(key, JSON.stringify(categories))
}

export const getSavedCategories = (): ICategories[] | null => {
    const data = localStorage.getItem(key)

    if (data) {
        return JSON.parse(data)
    }

    return null
}
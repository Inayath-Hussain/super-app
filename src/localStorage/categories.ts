import { ICategories } from "@/pages/category/category"

const key = 'user-categories'

export const saveCategoriesToLS = (categories: ICategories[]) => {
    localStorage.setItem(key, JSON.stringify(categories))
}
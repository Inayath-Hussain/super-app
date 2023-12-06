import { ICategories } from "@/pages/category/category"

interface IGenreId {
    id: number
    genre: ICategories
}

export const genreIds: IGenreId[] = [
    { id: 28, genre: "Action" },
    { id: 18, genre: "Drama" },
    { id: 14, genre: "Fantasy" },
    { id: 878, genre: "Fiction" },
    { id: 27, genre: "Horror" },
    { id: 10402, genre: "Music" },
    { id: 10749, genre: "Romance" },
    { id: 53, genre: "Thriller" },
    { id: 37, genre: "Western" }
]


export const getGenreId = (genreName: ICategories) => {
    const obj = genreIds.find(g => g.genre === genreName)

    if (obj === undefined) throw Error(`${genreName} is not present in genreIds array`)

    return obj.id
}
import { ICategories } from "@/pages/category/category";
import { getMoviesData } from "@/services/moviesApi";
import { getGenreId } from "@/utilities/movies/tmdbGenreId";
import useSWRImmutable from "swr/immutable";

interface Iresults {
    genre_ids: number[]
    poster_path: string
    backdrop_path: string
}

interface Imovies {
    results: Iresults[]
}

const useMoviesApi = (category: ICategories) => {

    const id = getGenreId(category);

    // retry count is undefined and retry interval is 5 sec
    const { data, isLoading, error } = useSWRImmutable<Imovies>(`/api/movies?genres=${id}`, getMoviesData, { errorRetryCount: 12, errorRetryInterval: 6000 });

    return {
        isLoading,
        data,
        error
    }
}

export default useMoviesApi;
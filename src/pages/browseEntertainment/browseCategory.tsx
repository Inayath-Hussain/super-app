import useMoviesApi from "@/hooks/useMovies";
import { ICategories } from "../category/category";
import "./browseCategory.scss";

interface Iprops {
    categoryName: ICategories
}

const BrowseCategory: React.FC<Iprops> = ({ categoryName }) => {

    const { isLoading, data } = useMoviesApi(categoryName);

    let imgs;

    if (data !== undefined) {
        imgs = data.results.slice(0, 4)
    }
    return (
        <div className="browse-section-layout">
            <p className="category-title">{categoryName}</p>

            {
                isLoading ? <p className="status">Loading...</p>
                    : imgs !== undefined ?
                        <div className="browse-images-layout">
                            {imgs.map(d => (
                                <img key={d.backdrop_path} src={`https://image.tmdb.org/t/p/original${d.backdrop_path}`} alt="" />
                            ))}
                        </div>
                        : <p className="status">Retrying...</p>
            }
        </div>
    );
}

export default BrowseCategory;
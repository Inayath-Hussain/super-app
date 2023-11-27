import { ICategories } from "@/pages/category/category"
import actionImg from '@/assets/categories/action.png'
import dramaImg from "@/assets/categories/drama.png"
import romanceImg from "@/assets/categories/romance.png"
import thrillerImg from "@/assets/categories/thriller.png"
import westernImg from "@/assets/categories/western.png"
import horrorImg from '@/assets/categories/horror.png'
import fantasyImg from "@/assets/categories/fantasy.png"
import musicImg from "@/assets/categories/music.png"
import fictionImg from "@/assets/categories/fiction.png"

import './categoryOptions.scss'

interface ICategoriesList {
    title: ICategories
    picUrl: string
    bgColor: string
}

interface Iprops {
    selectedCategories: ICategories[]
    handleSelection: (category: ICategories) => void
    handleNext: () => void
}

const CategoryOptions: React.FC<Iprops> = ({ handleSelection, selectedCategories, handleNext }) => {
    const categories: ICategoriesList[] = [
        { title: 'Action', picUrl: actionImg, bgColor: '#FF5209' },
        { title: 'Drama', picUrl: dramaImg, bgColor: '#D7A4FF' },
        { title: 'Romance', picUrl: romanceImg, bgColor: '#148A08' },
        { title: 'Thriller', picUrl: thrillerImg, bgColor: '#84C2FF' },
        { title: 'Western', picUrl: westernImg, bgColor: '#902500' },
        { title: 'Horror', picUrl: horrorImg, bgColor: '#7358FF' },
        { title: 'Fantasy', picUrl: fantasyImg, bgColor: '#FF4ADE' },
        { title: 'Music', picUrl: musicImg, bgColor: '#E61E32' },
        { title: 'Fiction', picUrl: fictionImg, bgColor: '#6CD061' }
    ]

    return (

        <div className="category-options-container">
            <div className="category-options-grid">
                {categories.map(c => (
                    <div key={c.title} aria-label={`select ${c.title} category`} role="button" tabIndex={0}
                        style={{ backgroundColor: c.bgColor }} className={selectedCategories.find(i => i === c.title) ? 'selected-border' : ''}
                        onClick={() => handleSelection(c.title)}>
                        <p>{c.title}</p>
                        <img src={c.picUrl} alt="" />
                    </div>
                ))}
            </div>

            <button onClick={handleNext}>Next Page</button>
        </div>
    );
}

export default CategoryOptions;
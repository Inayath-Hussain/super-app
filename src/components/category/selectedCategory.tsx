import './selectedCategory.scss'
import { ICategories } from '@/pages/category/category';
import errorIcon from "@/assets/icons/error-icon.svg"

interface Iprops {
    selectedCategories: ICategories[]
    handleDeletion: (category: ICategories) => void
    showError: boolean
}

const SelectedCategory: React.FC<Iprops> = ({ selectedCategories, handleDeletion, showError }) => {

    return (
        <div className="selected-category-container">
            <h1>Super app</h1>

            <h2>Choose your<br />
                entertainment <br />
                category
            </h2>

            <div className='selected-category'>
                {selectedCategories.map(s => (
                    <div key={s}>{s}
                        <button aria-label={`remove ${s} from selection`} onClick={() => handleDeletion(s)}>X</button>
                    </div>
                ))}
            </div>

            {
                showError && <div className='category-error'>
                    <img src={errorIcon} alt="" />
                    <p>Minimum 3 category required</p>
                </div>
            }
        </div>
    );
}

export default SelectedCategory;
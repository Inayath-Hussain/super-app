import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SelectedCategory from '../../components/category/selectedCategory';
import './category.scss'
import CategoryOptions from '@/components/category/categoryOptions';
import { saveCategoriesToLS } from '@/localStorage/categories';
import { homeRoute } from '@/route';

export type ICategories = 'Action' | 'Drama' | 'Romance' | 'Thriller' | 'Western' | 'Horror' | 'Fantasy' | 'Music' | 'Fiction'

const CategoryPage = () => {
    const [selectedCategories, setSelectedCategories] = useState<ICategories[]>([]);
    const [showMinimumError, setShowMinimumError] = useState(false);

    const navigate = useNavigate()

    const handleSelection = (category: ICategories) => {

        if (selectedCategories.find(c => c === category)) {
            return setSelectedCategories(prev => prev.filter(p => p !== category))
        }
        return setSelectedCategories([...selectedCategories, category])
    }


    // removing selected category
    const handleDeletion = (category: ICategories) => {
        return setSelectedCategories(prev => prev.filter(p => p !== category))
    }


    // checks if user selected minimum required categories, if true navigates user to home page else sets "showMinimumError" to true
    const handleNext = () => {
        if (selectedCategories.length >= 3) {

            saveCategoriesToLS(selectedCategories)

            navigate(homeRoute)

            return setShowMinimumError(false)
        }

        setShowMinimumError(true)
    }

    return (
        <main className="category-layout">

            <SelectedCategory selectedCategories={selectedCategories} handleDeletion={handleDeletion} showError={showMinimumError} />
            <CategoryOptions selectedCategories={selectedCategories} handleSelection={handleSelection} handleNext={handleNext} />

        </main>
    );
}

export default CategoryPage;
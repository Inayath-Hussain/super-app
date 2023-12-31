import { useLocation, Navigate } from 'react-router-dom'
import { isUserSignedIn } from "../../utilities/localStorage/signUp";
import { getSavedCategories } from '@/utilities/localStorage/categories';
import { categoryRoute, registerRoute } from '@/route';


const ProtectedRoute: React.FC<React.PropsWithChildren> = ({ children }) => {

    const { pathname } = useLocation();

    const signInStatus = isUserSignedIn()
    const categories = getSavedCategories()

    if (!signInStatus) {
        return (
            <Navigate to={registerRoute} />
        )
    }

    if (pathname !== categoryRoute && categories === null) {
        return (
            <Navigate to={categoryRoute} />
        )
    }


    return (
        <>
            {children}
        </>
    )


}

export default ProtectedRoute;
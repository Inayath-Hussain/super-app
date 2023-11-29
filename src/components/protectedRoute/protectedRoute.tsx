import { useLocation, Navigate } from 'react-router-dom'
import { isUserSignedIn } from "../../localStorage/signUp";
import { getSavedCategories } from '@/localStorage/categories';
import { categoryRoute, registerRoute } from '@/route';


const ProtectedRoute: React.FC<React.PropsWithChildren> = ({ children }) => {

    const { pathname } = useLocation();

    const signInStatus = isUserSignedIn()
    const categories = getSavedCategories()

    console.log(isUserSignedIn())

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
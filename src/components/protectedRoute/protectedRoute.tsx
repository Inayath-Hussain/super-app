import { useNavigate } from 'react-router-dom'
import { isUserSignedIn } from "../../localStorage/signUp";
import { useEffect } from 'react';


const ProtectedRoute: React.FC<React.PropsWithChildren> = ({ children }) => {
    const navigate = useNavigate()

    useEffect(() => {
        // if user is not signed in then redirect to registeration page
        if (!isUserSignedIn()) navigate('/register')
    }, [])

    console.log(isUserSignedIn())
    if (isUserSignedIn()) {
        return (
            <>
                {children}
            </>
        );
    }


}

export default ProtectedRoute;
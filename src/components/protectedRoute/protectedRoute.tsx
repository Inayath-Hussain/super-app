import { redirect } from 'react-router-dom'
import { isUserSignedIn } from "../../localStorage/signUp";


const ProtectedRoute: React.FC<React.PropsWithChildren> = ({ children }) => {
    // if user is signed in then display page
    if (isUserSignedIn()) {
        return (
            <>
                {children}
            </>
        );
    }

    // if user is not signed in then redirect to registeration page
    redirect('/register')

}

export default ProtectedRoute;
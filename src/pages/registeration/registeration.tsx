import { useState } from 'react'
import FormInput, { ITypes } from '../../components/formInput/formInput';
import RegisterationBanner from '../../components/registerationBanner/registerationBanner';
import { saveUserData } from '../../localStorage/signUp'
import './registeration.scss'
import { useNavigate } from 'react-router-dom';
import { categoryRoute } from '@/route';

interface IFormData<T> {
    name: T
    userName: T
    email: T
    mobile: T
    allowShare: boolean
}

export type IFormState = IFormData<string>
type IFormError = IFormData<boolean>


interface IInputs extends ITypes {
    value: string | boolean
    name: keyof IFormState
    showError: boolean
    errorMsg?: string
}

const errorsInitialValue: IFormError = {
    name: false,
    userName: false,
    email: false,
    mobile: false,
    allowShare: false
}

const RegisterationPage = () => {

    const navigate = useNavigate();

    const [formValues, setFormValues] = useState<IFormState>({
        name: '',
        userName: '',
        email: '',
        mobile: '',
        allowShare: false
    })

    const [formErrors, setFormErrors] = useState<IFormError>(errorsInitialValue)

    const [emailErrorMsg, setEmailErrorMsg] = useState('')
    const [mobileErrorMsg, setMobileErrorMsg] = useState('')

    // make sure that "name" and formValues property name is same 
    const Inputs: IInputs[] = [
        {
            value: formValues.name,
            name: 'name',
            type: 'text',
            placeholder: 'Name',
            showError: formErrors.name
        },

        {
            value: formValues.userName,
            name: 'userName',
            type: 'text',
            placeholder: 'UserName',
            showError: formErrors.userName
        },

        {
            value: formValues.email,
            name: 'email',
            type: 'email',
            placeholder: 'Email',
            showError: formErrors.email,
            errorMsg: emailErrorMsg
        },

        {
            value: formValues.mobile,
            name: 'mobile',
            type: 'tel',
            placeholder: 'Mobile',
            showError: formErrors.mobile,
            errorMsg: mobileErrorMsg
        },

        {
            value: formValues.allowShare,
            name: 'allowShare',
            type: 'checkbox',
            placeholder: 'Share my registration data with Superapp',
            showError: formErrors.allowShare,
            errorMsg: 'Check this box if you want to proceed'
        }
    ]

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name as keyof IFormState

        // check if change is in share checkbox and update
        if (name === 'allowShare') return setFormValues(prev => ({ ...prev, allowShare: e.target.checked }))


        // update for rest of the inputs
        setFormValues(prev => ({ ...prev, [name]: e.target.value }))

    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        // check for errors
        const isValid = checkIfFormIsValid();

        console.log(isValid)
        // if no error save to local storage
        if (isValid) {
            // save to LS
            saveUserData(formValues)

            navigate(categoryRoute)
        }
    }


    const checkIfFormIsValid = (): boolean => {

        let newFormErrors: IFormError = { ...errorsInitialValue }

        newFormErrors.name = formValues.name.trim() === '' ? true : false

        newFormErrors.userName = formValues.userName.trim() === '' ? true : false

        newFormErrors.email = _isEmailInvalid(formValues.email)

        newFormErrors.mobile = _isMobileInvalid(formValues.mobile)

        newFormErrors.allowShare = !formValues.allowShare ? true : false

        // update UI
        setFormErrors({ ...newFormErrors })

        return Object.values(newFormErrors).every((val: boolean) => val === false)

    }


    /**
     * check and returns true if email format is invalid 
     */
    const _isEmailInvalid = (email: string): boolean => {

        let validEmailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

        if (email.trim() === '') {
            _updateEmailErrorMsg(false)
            return true
        }

        console.log(Inputs[2])
        if (!validEmailPattern.test(email)) {
            _updateEmailErrorMsg(true)
            return true
        }

        _updateEmailErrorMsg(false)
        return false
    }


    const _updateEmailErrorMsg = (isInvalid: boolean) => {

        setEmailErrorMsg(isInvalid ? 'Invalid Email' : '')

    }


    const _isMobileInvalid = (mobile: string): boolean => {

        let validMobilePattern = /[0-9]{10}/g

        if (mobile.trim() === '') {
            _updateMobileMsgError(false)
            return true
        }

        if (!validMobilePattern.test(mobile)) {
            _updateMobileMsgError(true)
            return true
        }

        _updateMobileMsgError(false)
        return false
    }

    const _updateMobileMsgError = (isInvalid: boolean) => {
        setMobileErrorMsg(isInvalid ? 'Must have 10 digits' : '')
    }


    return (
        <main className='registeration-page'>

            <RegisterationBanner />

            {/* outer container to center the content */}
            <div className='registeration-form-container'>

                {/* container to set a common width for input */}
                <div>

                    <h1>Super app</h1>
                    <p>Create your new account</p>
                    <form action="" onSubmit={handleSubmit}>

                        {Inputs.map(i => (
                            <FormInput key={i.placeholder} name={i.name} value={i.value} type={i.type}
                                placeholder={i.placeholder} handleChange={handleChange}
                                showError={i.showError}
                                {...(i.errorMsg ? { errorMsg: i.errorMsg } : {})} />
                        ))}


                        <button>SIGN UP</button>

                        <p className='policy'>By clicking on Sign up. you agree to Superapp <span>
                            Terms and <br />
                            Conditions of Use
                        </span></p>

                        <p className='policy'>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp
                            <span> Privacy Policy</span></p>
                    </form>

                </div>
            </div>
        </main>
    );
}

export default RegisterationPage;
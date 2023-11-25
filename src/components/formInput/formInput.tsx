import './formInput.scss';

export interface ITypes {
    type: 'text' | 'email' | 'tel' | 'checkbox' // can use HTMLInputTypeAttribute if u want to include all types of input
    placeholder: string
    name: string
    showError: boolean
    errorMsg?: string
}

interface Iprops<T extends string | boolean> {
    value: T
    handleChange: ((e: React.ChangeEvent<HTMLInputElement>, ...rest: any[]) => void)
}

type ITextProps = Iprops<string>
type ICheckboxProps = Iprops<boolean>

const FormInput: React.FC<ITypes & (ITextProps | ICheckboxProps)> = ({ type, value, handleChange, placeholder, name, showError, errorMsg = 'Field is required' }) => {
    console.log(errorMsg)
    if (typeof value === 'boolean') {
        return (
            <div className='formInput'>
                <div className="checkbox" >
                    <input name={name} id={`${name}-checkbox`} type="checkbox" checked={value} onChange={(e) => handleChange(e)} />
                    <label htmlFor={`${name}-checkbox`}>{placeholder}</label>
                </div>
                {showError && <p>{errorMsg}</p>}
            </div>
        )
    }

    return (
        <div className='formInput'>
            <input name={name} type={type} value={value} onChange={(e) => handleChange(e)} placeholder={placeholder}
                className={showError ? 'error' : ''} />
            {showError &&
                <p>{errorMsg}</p>}
        </div>
    );
}

export default FormInput;
// write your custom hook here to control your checkout form
import React , {useState} from 'react'
export const useForm = initialValue => {
    const [showSuccessMessage, setSuccessMessage] = useState(false);
    const [values, setValues] = useState(initialValue)

    const handleChange = e =>{
        setValues({...values, [e.target.name]: e.target.value})
    }
    const handleSubmit = e =>{
        e.preventDefault();
        setSuccessMessage(true)
    }
    return [handleChange, handleSubmit, values, showSuccessMessage]
}
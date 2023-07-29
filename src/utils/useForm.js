import { useState } from 'react'

const useForm = (initValue = {}) => {
    const [values, setValues] = useState(initValue);

    const handleChange = (event) => {
        event.persist();

        let target = event.target;
        let name = target.name;
        let valueWithSpaces = event.target.value;
        let value = valueWithSpaces.trimStart();
        setValues({
            ...values,
            [name]: value,
        })
    }


    return {
        values,
        handleChange,
    }
}

export default useForm
import { useState } from "react"

export function useLogin() {
    const [data, setData] = useState({
        username: '',
        password: '',
        remember: false
    })

function handleInputChange(event) {
    const { name, type, value, checked } = event.target 
    console.log(data)
    setData((data) => {
        return {
            ...data,
            [name]: type === 'checkbox' ? checked : value,
        }
    })
}
    return({

        data: data,
        onInput: handleInputChange

    })
}
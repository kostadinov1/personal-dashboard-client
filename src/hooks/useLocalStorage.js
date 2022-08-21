import { useState } from "react"


export const useLocalStorage = (key, initialValue) => {
    const [state, setState] = useState(() => {
        try {
        let item  = localStorage.getItem(key);

        return item ?
            JSON.parse(item)
             : initialValue
        } catch(err) {
            console.log(err)
            return initialValue
        }

    })

    // TODO: add support for funcition arguments
    const setItem = (value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value))
            setState(value)
        } catch(err) {
            console.log(err)
        }
    }

    return [state, setItem ]

}
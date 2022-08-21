
import { useState } from "react";


export function useGithubUser() {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

   async function fetchGithubUser(username) {
        setLoading(true)
        setError(null)


        try {
            const response = await fetch(`https://api.github.com/users/${username}`)
            const json = await response.json()
            setUser(json)
        } catch (error) {
            setError(error)
            setUser(null)

        } finally {
            setLoading(false)
        }





        
    }
    return { user, error, loading, onFetchUser: fetchGithubUser }
}

import { useGithubUser } from "./useGithubUser";

export function GithubUser({ username='TizianoForte'}) {
    const{ user,loading, error, onFetchUser}=useGithubUser(username)

    function handleGetUserData (){
        onFetchUser(username)
    }

    return (
        <div>
            <button onClick={handleGetUserData}>Load User data</button>
            {loading && <h1>Loading...</h1>}
            {error && <h1>There has been an error: {error.message}</h1>}
            <h1>{user?.name}</h1>
            <p>{user?.login}</p>
            <p>{user?.location}</p>
            
        </div>
    )

}
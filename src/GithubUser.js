import { useGithubUser } from "./useGithubUser";

export function GithubUser({ username }) {
    
    const {users, onFetchUser} = useGithubUser(username);

    function handleFetch(){
        onFetchUser()
    }
    
    return(
        <div>
            {users && <h1>{users.name}</h1>}
            {users && <img alt="avatar_prof" src={users.avatar_url}></img>}
            {users && <h3>{users.location}</h3>}
            <button onClick={handleFetch}>Reaload data</button>
        </div>
    )
}

export default GithubUser
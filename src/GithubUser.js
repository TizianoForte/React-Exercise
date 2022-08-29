import { useGithubUser } from "./useGithubUser";

export function GithubUser({ username }) {
    
    const {users, error, isLoading} = useGithubUser(username);

    
    return(
        <div>
            {users && <h1>{users.name}</h1>}
            {users && <img alt="avatar_prof" src={users.avatar_url}></img>}
            {users && <h3>{users.location}</h3>}
            {users && <h5>{users.bio}</h5>}
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>Error!! User not found</h1>}
        </div>
    )
}

export default GithubUser
import { useGithubUser } from "./useGithubUser"

export function GithubUser({username='TizianoForte'}){

    const {data, error, loading} = useGithubUser(username);

    
    return(
        <div>
            {data && <h2>{data.name}</h2>}
            {data && <img alt="img_profile" src={data.avatar_url}></img>}
            {data && <h3>{data.location}</h3>}
            {data && <h5>{data.bio}</h5>}
            {loading && <h1>Loading...</h1>}
            {error && <h1>Error!!</h1>}
        </div>
    )
}
//non capisco perchè non visualizza il nome.
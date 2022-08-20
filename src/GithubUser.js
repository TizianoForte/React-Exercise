import { useEffect, useState } from "react";


export function GithubUser({username}){
   const[data, setData] = useState('');
   const [error,setErrors] = useState('');
   const[status,setStatus] = useState('');
   
   const fetchData= async(username)=>{
    try{
        const fetching = await fetch(`https://api.github.com/users/${username}`);
        const json = await fetching.json();
        setStatus(fetching.status)
        setData(json);
    }
    catch(err){
        setErrors(err)
        setData(null)
    }
}

    useEffect(() => {
        fetchData(username);
      }, [username]);

    console.log(data)

    return(
        <div>
            {status === 200 ?<h1>{data.login}</h1>: <h1>{error.message}</h1>}
        </div>
    )
}

//Penso  funzioni
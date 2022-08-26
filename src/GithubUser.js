
import React from "react";
import { useEffect } from "react";
import { useState } from "react";


export function GithubUser({ username }) {


  const [data, setData] = useState({});
  const [error,setError] = useState({})
  const [status,setStatus] = useState("")

  const getUser = async (username) => {

   try {
    const fetchUser = `https://api.github.com/users/${username}`;
  
    const fetching = await fetch(fetchUser);

    setStatus(fetching.status)
  
    const json = await fetching.json();

    setData(json)
   } catch (error) {
    setError(error)
    setData(null)
   }
  };

  useEffect(()=>{

   getUser(username)

  },[username])

  return (
    <>
    {status === 200 ? <h1>{data.login}</h1> : <h1>{error.message}</h1>}
    </>
  );
}
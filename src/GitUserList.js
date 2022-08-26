import { useRef } from "react";
import { useState } from "react";
import { GithubUser } from "./GithubUser";
import React from "react";



export function GithubUserList(){
    const [names,SetNames]=useState(['TizianoForte'])
    const inputRef =useRef()

    const setNameOnState=(a)=>{
        const value = a.target.value;
        inputRef.current= value
    };

    const addNames=()=>{
        SetNames ([...names,inputRef.current])
    }

    return(
        <div>
        <input type='text' onKeyUp={setNameOnState}/>
        <button onClick={addNames}>Add</button>
        <ul>
            {names.map((item,key)=>{
                return(
                    <li key={key}>
                        <GithubUser username={item}/>
                    </li>
                )
            })}
        </ul>
        </div>
    )
}
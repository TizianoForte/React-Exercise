import React,{useEffect, useState} from "react";



export function ClickCounter({onCounterChange}) {
    const [count, setCounter] = useState (0);
    
   
   function handleCounterIncrement() {
      setCounter(count +1)
    };
useEffect(()=>onCounterChange(count),[count,onCounterChange])
   
        return (
            <div>
                <h1>Counter: {count}</h1>
                <button onClick={()=>handleCounterIncrement()}>Increment</button>
            </div>
        )
    

}

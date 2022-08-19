import React,{useState} from "react";



export function ClickCounter({initialCounter = 0, incrementBy = 1}) {
    const [counter, setCounter] = useState (initialCounter);
    
   
   function handleCounterIncrement() {
      setCounter(c=> c+ incrementBy)
    }

   
        return (
            <>
                <h1>Counter: {counter}</h1>
                <button onClick={handleCounterIncrement}>Increment</button>
            </>
        )
    

}

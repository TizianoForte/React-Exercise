import { useEffect } from "react"
import { useCounter } from "./useCounter"




export function ClickCounter({ initialCounter = 0, changeby = 1 }) {

    const { counter, onIncrement, onDecrement, onCReset, onChange } = useCounter(initialCounter, changeby)

    useEffect(() => { onChange() }, [counter])
   
    return (
        <>
            <h1>Counter: {counter}</h1>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
            <button onClick={onCReset}>Reset</button>
        </>
    )


}

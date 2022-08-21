import { useCallback, useState } from "react"


export function useCounter(initialCounter = 0, changeby = 1) {
    const [counter, setCounter] = useState(initialCounter)

    const handleCounterIncrement = useCallback(function handleCounterIncrement() {
        setCounter(c => c + changeby)
    }, [changeby])

    const handleCounterDecrement = useCallback(function handleCounterDecrement() {
        setCounter(c => c - changeby)
    }, [changeby])

    const handleCounterReset = useCallback(function handleCounterReset() {
        setCounter(initialCounter)
    }, [initialCounter])

    const handleCounterChange = useCallback(function handleCounterChange() {
        console.log(`The counter is now: ${counter}`)
    }, [counter])

    return {
        counter: counter,
        onIncrement: handleCounterIncrement,
        onDecrement: handleCounterDecrement,
        onCReset: handleCounterReset,
        onChange: handleCounterChange,

    }


}
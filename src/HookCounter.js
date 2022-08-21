import { useCounter } from "./UseCounter"


export function HookCounter({ initialValue = 0 }) {
    const { counter, onIncrement, onDecrement, onReset } = useCounter(initialValue)

    return (
        <div>
            <div>
                <button onClick={onIncrement}>Increment</button>
                <button onClick={onDecrement}>Decrement</button>
                <button onClick={onReset}>Reset</button>
            </div>
            <h3>Count: {counter}</h3>
        </div>
    )
}
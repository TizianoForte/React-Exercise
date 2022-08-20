import { useEffect, useState } from "react";


export default function Counter({ initialValue = 0, addValue = +1 }) {
  const [count, setCount] = useState(initialValue);
  useEffect(() => {
    const interval = setInterval(() => {
      addCounter();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });


const addCounter = () => {
  setCount(count + addValue);
};
return (
  <div>
    <h2>Count : {count}</h2>
    <button onClick={addCounter}>increases {addValue}</button>
  </div>
);
}
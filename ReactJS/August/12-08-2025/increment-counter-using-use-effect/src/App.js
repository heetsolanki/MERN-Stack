import { useEffect, useState } from "react";

function App() {
  const[count, setCount] = useState(0)
  const[doubleValue, setDoubleValue] = useState(count * 2)

  useEffect(() => {
    setDoubleValue((doubleValue) => count * 2)
  })

  return (
    <div>
      <h1>Counter: {count}</h1>
      <h1>Double Value: {doubleValue}</h1>

      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export default App;
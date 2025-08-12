import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1)
    }, 1000);
  })

  return (
    <div>
      <h1>Count: </h1><h1 id="count">{count}</h1>
    </div>
  );
}

export default App;

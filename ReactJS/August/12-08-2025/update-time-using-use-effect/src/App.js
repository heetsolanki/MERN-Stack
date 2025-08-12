import { use, useEffect, useState } from "react";

function App() {
  const[time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setTimeout(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  })

  return (
    <div>
      <h1>Current Time: {time}</h1>
    </div>
  );
}

export default App;
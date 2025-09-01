import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const [time, setTime] = useState(new Date());

  return (
    <div>
      <h1>Time: {time.toLocaleTimeString()}</h1>
      <button onClick={() => setTime(new Date())}>Refresh time!</button>
    </div>
  );
}

export default App;
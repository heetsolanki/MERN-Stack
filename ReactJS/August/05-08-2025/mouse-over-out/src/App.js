import React, {useState} from "react";
import ReactDOM from "react-dom";

function App() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{backgroundColor: isHovered ? "lightblue" : "lightgreen",}} 
    onMouseOver={() => setIsHovered(true)} 
    onMouseOut={() => setIsHovered(false)}>
      <h1>Hover Over me!</h1>
    </div>
  )
}

export default App;
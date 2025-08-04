import React, { useState } from "react";
import ReactDOM from "react-dom";

function String() {
  const [isTrue, setIsTrue] = useState(true);
  const displayString = isTrue ? "" : "Hello, World!";
    return (
    <div>
        <h1>{displayString}</h1>
        <button onClick={() => setIsTrue(!isTrue)}>
            Toggle String
        </button>
    </div>
);
}

export default String;

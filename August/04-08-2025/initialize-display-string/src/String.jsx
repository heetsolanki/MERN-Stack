import React, { useState } from "react";
import ReactDOM from "react-dom";

function String() {
    const [str, setStr] = useState('')

    return (
        <div>
            <h1>{str}</h1>
            <button onClick={() => setStr('Updated String')}>Update String</button>
        </div>
    );
}

export default String;
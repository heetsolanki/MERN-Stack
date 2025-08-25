import React, {useState} from "react";

function Arr() {
  const [click, setClick] = useState([{id: 1, value: ""}])

  const addNumber = () => {
    setClick([
      ...click, {
        id: (click.length),
        value: (click.length) * (click.length),

      }
    ])
  }

  return (
    <div>
      <ul>
        {click.map (item => (
          <li key = {item.id} > {item.id} and {item.value} </li>
        ))}
      </ul>
      <button onClick={addNumber}>Click Me!</button>
    </div>
  )
}

export default Arr;
import React, { useState } from "react";
 function Cubes() {
  const [numbers, setNumbers] = useState([]);
  const [count, setCount] = useState(1);

  const handleClick = () => {
    setNumbers([...numbers, `Cube of ${count} is ${count ** 3}`]);
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Cube</button>
      <ul>
        {numbers.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Cubes;

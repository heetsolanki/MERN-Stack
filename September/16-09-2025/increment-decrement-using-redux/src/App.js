import { increment, decrement } from "./actions";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const changeTheNumber = useSelector(state => state.changeTheNumber);

  const dispath = useDispatch();

  return (
    <>
      <div>
        <h1>Increment & Decrement Counter</h1>
        <h2>Using React and Redux</h2>
        <div className="container">
          <button onClick={() => dispath(decrement())}>-</button>
          <input type="text" value={changeTheNumber} />
          <button onClick={() => dispath(increment(5))}>+</button>
        </div>
      </div>
    </>
  )
}

export default App;
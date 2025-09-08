import React, { useState } from "react";

const Calculator = () => {
    const [firstNum, setFirstNum] = useState(0);
    const [secondNum, setSecondNum] = useState(0);
    const [operation, setOperation] = useState("+");
    const [result, setResult] = useState(0);

    const calculate = () => {
        switch (operation) {
            case "+":
                setResult(firstNum + secondNum);
                break;
            case "-":
                setResult(firstNum - secondNum);
                break;
            case "*":
                setResult(firstNum * secondNum);
                break;
            case "/":
                setResult(secondNum !== 0 ? firstNum / secondNum : "Error");
                break;
            default:
                setResult(0);
        }
    };

    return (
        <div>
            <h1>Calculator</h1>
            <button onClick={() => setFirstNum(firstNum + 1)}>
                {firstNum}
            </button>
            <select value={operation} onChange={(e) => setOperation(e.target.value)}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
            <button onClick={() => setSecondNum(secondNum + 1)}>
                {secondNum}
            </button>
            <button onClick={calculate}>
                {result}
            </button>
        </div>
    );
};

export default Calculator;

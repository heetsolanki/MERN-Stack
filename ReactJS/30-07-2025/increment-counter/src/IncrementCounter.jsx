import React from "react";
import ReactDOM from "react-dom";

class IncrementCounter extends React.Component {
    constructor() {
        super();
        this.state = {
            counter :0
        }
    }
    Incrementer = () => {
        this.setState({counter : this.state.counter + 1});
    }
    render() {
        return (
            <>
                <h1>Counter: {this.state.counter}</h1>
                <button onClick={this.Incrementer}>Increment</button>
                <button onClick={() => this.setState({counter: 0})}>Reset</button>
            </>
        )
    }
}

export default IncrementCounter;
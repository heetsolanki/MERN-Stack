import React from "react";
import ReactDOM from "react-dom";

class Evenodd extends React.Component {
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
                <h2>{(this.state.counter % 2 === 0) ? (this.state.counter == 0) ? "Zero" : "Even" : "Odd"}</h2>
                <button onClick={this.Incrementer}>Increment</button>
                <button onClick={() => this.setState({counter: 0})}>Reset</button>
            </>
        )
    }
}

export default Evenodd;
import React from "react";
import ReactDOM from "react-dom";

class ChangeHeadingColor extends React.Component {
    constructor() {
        super();
        this.state = {
            color: "black"
        }
    }
    changeColor = () => {
        this.setState({
            color: this.state.color === "black" ? "blue" : "black"
        });
    }

    render() {
        return (
            <div>
                <h1 style={{ color: this.state.color }}>Change My Color</h1>
                <button onClick={this.changeColor}>Change Color</button>
            </div>
        );
    }
}

export default ChangeHeadingColor;
import React from 'react';
import ReactDOM from 'react-dom/client';

class WelcomeMessage extends React.Component {
    constructor() {
        super();
        this.state = {message: "Welcome to React!"};
    }
    CallFunction = () => {
        this.setState({message: "Hello, React Learner!"});
    }
    render() {
        return (
            <>
                <h1>{this.state.message}</h1>
                <button onClick={this.CallFunction}>Change Message</button>
            </>
        );
    }
}

export default WelcomeMessage;
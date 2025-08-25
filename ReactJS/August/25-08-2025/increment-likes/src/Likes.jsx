import React from "react";
import reactDOM from 'react-dom';

class Likes extends React.Component{
    constructor () {
        super();
        this.state = {count:0};
    }
    callFunction= () => {
        this.setState (this.state,{count:this.state.count+1})
    }
    render () {
        const {count} = this.state;
        const withs = count > 1?'Likes' :'Like';
        return (
            <div>
                <h1>You have {count} {withs}</h1>
                <button onClick ={() => this.setState ({count:count+1})}>
                    Increment Likes
                </button>
            </div>
        )
    }
}
export default Likes;
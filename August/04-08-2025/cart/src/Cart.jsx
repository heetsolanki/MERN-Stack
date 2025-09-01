import React from "react";
import ReactDOM from 'react-dom';

class Cart extends React.Component {
    render() {
        return (<>
            <span>
                <img src={this.props.productImage} height="300px"/>
                <h2>{this.props.brandName}</h2>
                <h2>{this.props.price}</h2>
            </span>
        </>
        )
    }
}

export default Cart;

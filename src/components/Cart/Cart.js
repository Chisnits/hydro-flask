import React, { Component } from 'react';
import CartContainer from '../../containers/CartContainer'

import '../../styles/Cart.css';



class Cart extends Component {
 



    render() {
        // console.log(this.props.bottles);
        return (
            <div id="cart" className="cart">
            <CartContainer />
            </div>
        );
    }
}


export default Cart;
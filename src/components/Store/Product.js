import React, { Component } from 'react';
// import ProductItem from '../Product'
import bottles from './AllProducts'
import '../../styles/store/Product.css';

class Item extends Component {

    render() {
       
        return (
            <div className="product-container">
                <h3 className="product-title"> Bottle Title</h3>
                <div>
                    Bottle Image
                </div>
                <div>
                    {bottles.image}
                </div>
            </div>
        );
    }
}


export default Item;
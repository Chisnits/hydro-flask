import React, { Component } from 'react';

import SwatchColors from './SwatchColors'
import '../../styles/store/Product.css';
import ProductItem from '../Product'
import bottles from './AllProducts'

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
                    <SwatchColors />
                </div>
            </div>
        );
    }
}


export default Item;
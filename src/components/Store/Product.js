import React, { Component } from 'react';

import SwatchColors from './SwatchColors'
import '../../styles/store/Product.css';


class Product extends Component {

    render() {
       
        return (
            <div className="product-container">
                <h3 className="product-title"> Bottle Title</h3>
                <div>
                    Bottle Image
                </div>
                <div>
                    <SwatchColors />
                </div>
            </div>
        );
    }
}


export default Product;
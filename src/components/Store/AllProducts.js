import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductsContainer from '../../containers/ProductsContainer';
import axios from 'axios';

import '../../styles/store/Product.css'
// import Product from './Product';

class AllProducts extends Component {

    componentDidMount(){
            axios.get('/allbottles')
              .then(res => {console.log(res.data); return res.data})
        }
    render() {
        return (
            <div>
                <div className="top-image">
                    <div className="all-text">all</div>
                </div>
                <ul>
                    <div className="product-wrapper">
                            <div className="products-container">
                                <ProductsContainer />
                            </div>
                    </div>
                </ul>
            </div>
        );
    }
}

export default AllProducts;
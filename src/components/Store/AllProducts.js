import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBottles } from '../../actions'
import ProductsContainer from '../../containers/ProductsContainer';

import '../../styles/store/Product.css'
import Product from './Product';

class AllProducts extends Component {
    
    componentDidMount() {
        this.props.fetchBottles();
        console.log(this.props.bottles)
}

    renderBottles() {
            console.log('we made it here')
        return _.map(this.props.bottles, bottle => {
            return (
                <div>
                    hello
                    <li key={bottle.id}>
                        {/*<img src={require("{bottle.image}")} />*/}
                        {/*<img src={{uri:"{bottle.image}"}} />*/}
                        {/*{bottle.image}
                        {bottle.color}*/}
                        
                    </li>
                </div>
            )
        })
    }

    render() {
        // console.log(this.props.bottles);
        return (
            <div>
                <div className="top-image">
                    <div className="all-text">all</div>
                </div>
                <ul>
                    {this.renderBottles()}
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

function mapStateToProps(state) {
    return {bottles: state.bottles}
}

export default connect(mapStateToProps, { fetchBottles })(AllProducts);
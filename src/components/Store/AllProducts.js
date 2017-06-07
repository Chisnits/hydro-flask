import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBottles } from '../../actions'


import Product from './Product';

class AllProducts extends Component {
    
    componentDidMount() {
        this.props.fetchBottles();
    }

    renderBottles() {
        return _.map(this.props.bottles, bottle => {
            return (
                <li key={bottle.id}>
                    {/*<img src={require("{bottle.image}")} />*/}
                    {/*<img src={{uri:"{bottle.image}"}} />*/}
                    {/*{bottle.image}*/}
                    
                </li>
            )
        })
    }

    render() {
        // console.log(this.props.bottles);
        return (
            <div>
                <ul>
                    {this.renderBottles()}
                    <Product />
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {bottles: state.bottles}
}

export default connect(mapStateToProps, { fetchBottles })(AllProducts);
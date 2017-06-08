import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBottles } from '../../actions'

// import assets from '../../assets'
import Product from './Product';

class AllProducts extends Component {
    
    componentDidMount() {
        this.props.fetchBottles();
    }

    renderBottles() {
        return _.map(this.props.bottles, bottle => {
            return (
                <div>
                    <li key={bottle.id}>
                        {/*<img src={require("{bottle.image}")} />*/}
                        {/*<img src={{uri:"{bottle.image}"}} />*/}
                        {/*{bottle.image}*/}
                        {/*{bottle.color}*/}
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
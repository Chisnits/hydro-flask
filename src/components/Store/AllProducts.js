import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBottles } from '../../actions'

class AllProducts extends Component {
    
    componentDidMount() {
        this.props.fetchBottles();
    }

    renderBottles() {
        return _.map(this.props.bottles, bottle => {
            return (
                <li className="list-group-item" key={bottle.id}>
                    {bottle.image}
                </li>
            )
        })
    }

    render() {
        // console.log(this.props.bottles);
        return (
            <div>
                <h3>Bottles</h3>
                <ul className="list-group">
                    {this.renderBottles()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {bottles: state.bottles}
}

export default connect(mapStateToProps, { fetchBottles })(AllProducts);
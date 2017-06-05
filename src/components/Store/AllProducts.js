import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBottles } from '../../actions'

class AllProducts extends Component {
    
    componentDidMount() {
        this.props.fetchBottles();
        console.log(this.props.fetchBottles());
    }

    render() {
        return (
            <div>
            </div>
        );
    }
}

export default connect(null, { fetchBottles })(AllProducts);
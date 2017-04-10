import React, { Component } from 'react';
import '../../styles/MyHydro.css';

class BlueAndPurple extends Component {
    render() {
        return (
            <div>
                <img src={require("../../assets/blueAndPurple.jpg")} alt="Background Waterbottles" className="blue-and-purple-background"/>
            </div>
        )
    }
}

export default BlueAndPurple
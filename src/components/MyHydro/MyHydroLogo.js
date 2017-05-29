import React, { Component } from 'react';
import '../../styles/MyHydro.css';

class MyHydroLogo extends Component {
    render() {
        return (
            <img src={require("../../assets/myHydroLogo.png")} alt="My Hydro Logo" className="my-hydro-logo"/>
        )
    }
}

export default MyHydroLogo
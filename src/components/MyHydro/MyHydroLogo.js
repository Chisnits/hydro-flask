import React, { Component } from 'react';
import '../../styles/MyHydro.css';

class MyHydroLogo extends Component {
    render() {
        return (
            <div className="my-hydro-logo-image-container">
                <img src={require("../../assets/myHydroLogo.png")} alt="Background Waterbottles" className="my-hydro-logo"/>
            </div>
        )
    }
}

export default MyHydroLogo
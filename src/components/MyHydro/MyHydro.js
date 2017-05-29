import React, { Component } from 'react';
import BlueAndPurple from './BlueAndPurple'
import MyHydroLogo from './MyHydroLogo'
import '../../styles/MyHydro.css';

class MyHydro extends Component {
    render() {
        return (
            <div className="my-hydro-wrapper">
                        <BlueAndPurple /> 
                <div className="test">
                    <div className="my-hydro-logo-container">    
                        <MyHydroLogo />
                    </div>
                </div>
            </div>
        )
    }
}

export default MyHydro
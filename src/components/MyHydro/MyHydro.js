import React, { Component } from 'react';
import BlueAndPurple from './BlueAndPurple'
import MyHydroLogo from './MyHydroLogo'
import '../../styles/MyHydro.css';

class MyHydro extends Component {
    render() {
        return (
            <div className="my-hydro-wrapper">
             <div className="my-hydro-wallpaper">
                    {/*<BlueAndPurple/>*/}
                <div className="my-hydro-logo-container">    
                    <MyHydroLogo/>
                {/*<div className="my-hydro-logo">*/}

                </div>
            </div>
            </div>
        )
    }
}

export default MyHydro
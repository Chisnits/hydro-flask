import React, { Component } from 'react';
import BlueAndPurple from './BlueAndPurple'
import MyHydroLogo from './MyHydroLogo'
import '../../styles/MyHydro.css';

class MyHydro extends Component {
    render() {
        return (
            <div className="my-hydro-wrapper">
                        {/*<img src={require("../../assets/blueAndPurple.jpg")} alt="Background Waterbottles" className="blue-and-purple-background"/>*/}
                        <div className="blue-and-purple-background"></div>
                    <div className="my-hydro-logo-container">    
                        <MyHydroLogo />
                        <div className="text-container">
                            {/*<a>*/}
                                <h1>watch the video</h1>
                                <i className="fa fa-play-circle-o" aria-hidden="true"></i>
                            {/*</a>*/}
                            {/*<a>*/}
                                <h1>create your own</h1>
                                <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                            {/*</a>*/}
                        </div>
                    </div>
            </div>
        )
    }
}

export default MyHydro
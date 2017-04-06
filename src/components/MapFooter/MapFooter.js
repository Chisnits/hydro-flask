import React, { Component } from 'react';
import HFLogo from '../Header/HFLogo'
import '../../styles/MapFooter.css';

class MapFooter extends Component {
    render() {
        return (
            <div className="map-footer">
                <a>
                    <div className="map-footer-logo">
                        <HFLogo/>
                    </div> 
                </a>
            </div>
        )
    }
}

export default MapFooter

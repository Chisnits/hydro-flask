import React, { Component } from 'react';
import '../../styles/MapFooter.css';
import FooterLogo from './FooterLogo'

class MapFooter extends Component {
    render() {
        return (
            <div className="map-footer">
                    <div className="map-footer-logo">
                        <FooterLogo />
                    </div>
                    <div className="personal-information">
                        <span className="personal-name">Chase Derr</span>
                        <br />
                        chasederr@gmail.com
                    </div>
                    <h5 className="address">525 NW York Drive Bend, Oregon 97703</h5>

            </div>
        )
    }
}

export default MapFooter

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
            </div>
        )
    }
}

export default MapFooter

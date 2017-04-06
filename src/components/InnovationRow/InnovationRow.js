import React, { Component } from 'react';
import InnovationShield from './InnovationShield'
import OurStory from './OurStory'
import ParksHeart from './ParksHeart'
import '../../styles/InnovationRow.css';

class InnovationRow extends Component {
    render() {
        return (
            <div className="InnovationRowWrapper">
                <div className="innovationContainer">
                    <div className="innovation">
                        <InnovationShield/>
                        <span>Innovation</span> 
                    </div>
                </div>
                <div className="parksContainer">
                    <div className="parks">
                    <ParksHeart />
                    <span>Parks For All</span>
                    </div>
                </div>
                <div className="ourStoryContainer">
                    <div className="ourStory"> 
                        <OurStory />
                        <span>Our Story</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default InnovationRow
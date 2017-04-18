import React, { Component } from 'react';
import InnovationShield from './InnovationShield'
import OurStory from './OurStory'
import ParksHeart from './ParksHeart'
import '../../styles/InnovationRow.css';

class InnovationRow extends Component {
    render() {
        return (
            <main className="InnovationRowWrapper">
                <section className="innovationContainer">
                    <div className="innovation">
                        <InnovationShield/>
                        <span>Innovation</span> 
                    </div>
                </section>
                <section className="parksContainer">
                    <div className="parks">
                    <ParksHeart />
                    <span>Parks For All</span>
                    </div>
                </section>
                <section className="ourStoryContainer">
                    <div className="ourStory"> 
                        <OurStory />
                        <span>Our Story</span>
                    </div>
                </section>
            </main>
        )
    }
}

export default InnovationRow
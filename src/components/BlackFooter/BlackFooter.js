import React, { Component } from 'react';
import HFLogo from '../Header/HFLogo'
import '../../styles/BlackFooter.css';

class BlackFooter extends Component {
    render() {
        return (
            <section>
                <div className="black-footer-wallpaper">
                    <section className="company-links">
                        <div className="company-links-column-1">
                            <h4>Company</h4>
                                <ul className="company-list">
                                    <li>About</li>
                                    <li>Careers</li>
                                    <li>Press</li>
                                    <li>Affiliates</li>
                                </ul>
                        </div>
                        <div className="company-links-column-2">
                            <h4>Support</h4>
                                <ul className="support-list">
                                    <li>FAQ</li>
                                    <li>Shipping</li>
                                    <li>Returns</li>
                                    <li>Care</li>
                                </ul>
                        </div>
                        <div className="company-links-column-3">
                            <ul className="support-list">
                                <li>Contact</li>
                                <li>Dealer Central</li>
                                <li>Pro Deal</li>
                                <li>Warranty</li>
                            </ul>
                        </div>
                    </section>       
                    <section className="stay-in-touch-column">
                        <div>
                            <h1>Stay in touch!</h1>
                            <p>From new products to new ways to drink in the <br/>
                             adventure, we’ll take you along for the ride with the <br/>
                            latest on everything Hydro Flask.</p>
                            <input className="newsletter" type="text" placeholder="Enter your email to stay in touch"/>
                            <div className="social-media-links"></div>
                        </div>
                    </section>
                </div>

            </section>
        )
    }
}

export default BlackFooter

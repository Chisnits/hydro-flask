import React, { Component } from 'react';
// import HFLogo from '../Header/HFLogo'
import '../../styles/BlackFooter.css';

class BlackFooter extends Component {
    render() {
        return (
            <section>
                <div className="black-footer-wallpaper">
                    <section className="company-links">
                        <div className="company-links-column-1">
                            <ul className="company-list">
                                <h4 className="title">Company</h4>
                                    <li>About</li>
                                    <li>Careers</li>
                                    <li>Press</li>
                                    <li>Affiliates</li>
                                </ul>
                        </div>
                        <div className="company-links-column-2">
                            <ul className="support-list">
                                <h4 className="title">Support</h4>
                                    <li>FAQ</li>
                                    <li>Shipping</li>
                                    <li>Returns</li>
                                    <li>Care</li>
                                </ul>
                        </div>
                        <div className="company-links-column-3">
                            <ul className="third-list">
                                <li>Contact</li>
                                <li>Dealer Central</li>
                                <li>Pro Deal</li>
                                <li>Warranty</li>
                            </ul>
                        </div>
                    </section>       
                    <section className="stay-in-touch-column">
                        <div>
                            <h1 className="title">    Stay in 
                                <br />
                                    touch!
                            </h1>
                            <p className="description">From new products to new ways to drink in the <br/>
                             adventure, we’ll take you along for the ride with the <br/>
                            latest on everything Hydro Flask.</p>
                            <input className="newsletter" type="text" placeholder="Enter your email to stay in touch"/> 
                            <div className="social-media-links">
                                <a href="https://twitter.com/HydroFlask"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                <a href="https://instagram.com/HydroFlask"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                <a href="https://facebook.com/HydroFlask"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                <a href="https://youtube.com/user/HydroFlask"><i className="fa fa-pinterest-p" aria-hidden="true"></i></a>
                                <a href="https://pinterest.com/HydroFlask"><i className="fa fa-youtube-play" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </section>
                </div>

            </section>
        )
    }
}

export default BlackFooter

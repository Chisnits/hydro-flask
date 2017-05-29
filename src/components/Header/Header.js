import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import CartCircle from './CartCircle';
import HFLogo from './HFLogo';
import '../../styles/Header.css';

class Header extends Component {
    render() {
        return (
            <div>
                <div className="loginBar">
                    <div className="promotionWrapper">
                        <span className="promotion">free shipping on 2+ hydro flasks</span>
                            <div className="loginContainer">
                                <span><a>Log in</a></span>
                                <span><a>Find a Store</a></span>
                            </div>
                    </div>
                    <div className="loginText">
                        
                    </div>
                </div>
                <div className="mainNav">
                    <div className="logoWrapper">
                        <Link to="/"><HFLogo />
                        </Link>
                    </div>
                    {/*<div className="linkContainerCenter"> */}
                        <ul className="linkContainer">
                            <li><a>shop</a></li>
                            <li><a>customize</a></li>
                            <li><a>learn</a></li>
                        </ul>  
                    {/*</div>*/}
                    <div className="cartContainer">
                        <a>
                            <span className="cart"> cart  </span>
                            <CartCircle />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header
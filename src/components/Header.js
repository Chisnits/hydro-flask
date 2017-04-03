import React, { Component } from 'react';
import '../styles/Header.css';

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
                    <img src="../assets/hfLogo.svg" />
                    <div className="linkContainerCenter"> 
                        <ul className="linkContainer">
                            <li><a>shop</a></li>
                            <li><a>customize</a></li>
                            <li><a>learn</a></li>
                        </ul>  
                    </div>
                    <div className="cartContainer">
                        <span> cart </span>
                        <img src="../assets/cart-circle.svg" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Header
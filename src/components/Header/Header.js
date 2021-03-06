import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import CartCircle from './CartCircle';
import HFLogo from './HFLogo';
import '../../styles/Header.css';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            total: 0
        }
    }

    getTotal(total){
        this.setState({
            total: total
        })
    }
    render() {
        console.log(this.state.total)
        return (
            <section>
                <div className="loginBar">
                    <div className="promotionWrapper">
                        <span className="promotion white">free shipping on 2+ hydro flasks</span>
                            <div className="loginContainer">
                                <span><a className="white">Log in</a></span>
                                <span><a className="white">Find a Store</a></span>
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
                    
                        <ul className="linkContainer">
                            <Link to="/allproducts"><li>shop</li></Link>
                            <li><a className="white">customize</a></li>
                            <li><a className="white">learn</a></li>
                        </ul>  
                    
                    <div className="cartContainer">
                        
                            <Link to="/checkout/cart"><span className="cart"> cart  </span>
                            {/*<CartCircle />*/}
                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                            </Link>
                    </div>
                </div>
            </section>
        )
    }
}

export default Header
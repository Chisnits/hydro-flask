import React from 'react'
import PropTypes from 'prop-types'
import SwatchColors from './Store/SwatchColors'

import '../styles/store/Product.css'
import '../styles/store/SwatchColors.css';


const Product = ({ id, price, quantity, title, color, image }) => (
  <section>
    <div className="product-container">
      <div className="product-title">
        {title}
        {/*{id}*/}
      </div>
      <br/>
      <img src={image} alt="water-bottle"/>
      <br/>
      <h3 className="color-title">{color}</h3><div className="cart-quantity">{quantity ? ` x ${quantity}` : null}</div>
      {/*<div className="swatch-wrapper">
        <div className="swatch-container">
          <div className="swatch-wrapper">
                <div className="swatch-container">
                    <li className="cobalt-swatch"></li>
                    <li className="graphite-swatch"></li>
                    <li className="kiwi-swatch"></li>
                    <li className="lava-swatch"></li>
                    <li className="lemon-swatch"></li>
                    <li className="mango-swatch"></li>
                    <li className="mint-swatch"></li>
                    <li className="pacific-swatch"></li>
                    <li className="plum-swatch"></li>
                    <li className="raspberry-swatch"></li>
                    <li className="sage-swatch"></li>
                    <li className="forest-swatch"></li>
                    <li className="citron-swatch"></li>
                    <li className="black-swatch"></li>
                    <li className="white-swatch"></li>
                    <li className="tangelo-swatch"></li>
                    <li className="stainless-swatch"></li>
                    
                </div>
            </div>
        </div>
      </div>*/}
    </div>
  </section>
)


Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
  color: PropTypes.string
}

export default Product
import React from 'react'
import PropTypes from 'prop-types'
import SwatchColors from './Store/SwatchColors'

import '../styles/store/Product.css'

const Product = ({ price, quantity, title, color, image }) => (
  <section>
    <div className="product-info-container">
      <div className="product-title">
        {title}
      </div>
      <br/>
      <img src={image} alt="water-bottle"/>
      <br/>
      {color}{quantity ? ` x ${quantity}` : null}
      <div className="swatch-wrapper">
        <div className="swatch-container">
          <SwatchColors />
        </div>
      </div>
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
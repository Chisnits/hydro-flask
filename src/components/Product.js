import React from 'react'
import PropTypes from 'prop-types'
import SwatchColors from './Store/SwatchColors'

import '../styles/store/Product.css'

const Product = ({ price, quantity, title, color, image }) => (
  <section>
    <div className="product-info-container">
      <img src={image}/>
      <br/>
      {title} - &#36;{price} {color}{quantity ? ` x ${quantity}` : null}
      <div className="swatch-container">
        <div>
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
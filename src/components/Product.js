import React from 'react'
import PropTypes from 'prop-types'

import '../styles/store/Product.css'


const Product = ({ id, price, quantity, title, color, image }) => (
  <section>
    <div className="product-container">
      <div className="product-title">
        {title}
        {/*{id}*/}
      </div>
      <br/>
      <img className="product-image" src={image} alt="water-bottle"/>
      <br/>
      <h3 className="color-title">{color}</h3><div className="cart-quantity">{quantity ? ` x ${quantity}` : null}</div>
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
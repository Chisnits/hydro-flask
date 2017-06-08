import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, quantity, title, color }) => (
  <div>
    {title} - &#36;{price} {color}{quantity ? ` x ${quantity}` : null}
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
  color: PropTypes.string
}

export default Product
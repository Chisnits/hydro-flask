import React from 'react'
import PropTypes from 'prop-types'

import '../styles/store/Product.css'

const ProductsList = ({ title, children }) => (
  <div className="wrap">
    <div>{children}</div>
  </div>
)

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default ProductsList
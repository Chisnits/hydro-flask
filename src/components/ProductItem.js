import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

// import '../styles/store/Product.css'

const ProductItem = ({ product, onAddToCartClicked }) => (
  <div>
    <Product
      title={product.title}
      image={product.image}
      price={product.price}
      color={product.color} />
    <button
      onClick={onAddToCartClicked}
      disabled={product.inventory > 0 ? '' : 'disabled'}>
      {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
    </button>
  </div>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem
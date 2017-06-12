import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import { Link } from 'react-router-dom';

import '../styles/Cart.css'

const Cart  = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <Product
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        color={product.color}
        image={product.image}
        key={product.id}
      />
    )
  ) : (
    <em>You have no items in your shopping cart.</em>,
    <em>Click <Link to="/allproducts">here</Link> to continue shopping</em>
  )

  return (
    <div className="cart-container">
      <div className="wrap">{nodes}</div>
      <p className="cart-total">Total: &#36;{total}</p>
      <button className="checkout-btn" onClick={onCheckoutClicked}
        disabled={hasProducts ? '' : 'disabled'}>
        Checkout
      </button>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart
import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

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
    <em>Click <a>here</a> to continue shopping</em>
  )

  return (
    <div className="cart-container">
      <h3>BottleTitle</h3>
      <div>{nodes}</div>
      <p>Total: &#36;{total}</p>
      <button onClick={onCheckoutClicked}
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
import React from 'react'
import PropTypes from 'prop-types'

// import '../styles/store/Product.css'

const ProductsList = ({ children }) => (
  <div className="wrap">
    <div className="actual-container">
      {children}
       {/*<div className="swatch-wrapper">
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
            </div>*/}
    </div>
  </div>
)

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default ProductsList
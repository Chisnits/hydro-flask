import _ from 'lodash'
import axios from 'axios';
import shop from '../api/shop'
import * as types from '../constants/ActionTypes'

export const FETCH_BOTTLES = 'FETCH_BOTTLES';

const ROOT_URL = 'http://localhost:3001';

export function fetchBottles(){
    const request = axios(`${ROOT_URL}/allbottles`);
    console.log(request);
    return {
        type: FETCH_BOTTLES,
        payload: request
};
}

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products: products
})

export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products))
  })
}

const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId
})

export const addToCart = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(addToCartUnsafe(productId))
  }
}

export const checkout = products => (dispatch, getState) => {
  const { cart } = getState()

  dispatch({
    type: types.CHECKOUT_REQUEST
  })
  shop.buyProducts(products, () => {
    dispatch({
      type: types.CHECKOUT_SUCCESS,
      cart
    })
    // Replace the line above with line below to rollback on failure:
    // dispatch({ type: types.CHECKOUT_FAILURE, cart })
  })
}
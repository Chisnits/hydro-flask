/**
 * Mocking client-server processing
 */
import _products from './products.json'
import { fetchBottles } from '../actions/index'

const TIMEOUT = 100

export default {
  getBottles: (cb, timeout) => setTimeout(() => cb( fetchBottles ), timeout || TIMEOUT),
  getProducts: (cb, timeout) => setTimeout(() => cb( _products), timeout || TIMEOUT),
  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}
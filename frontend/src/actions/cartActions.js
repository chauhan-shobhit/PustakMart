import axios from 'axios'
import { CART_ADD_ITEM } from '../constants/cartConstants'

export const addToCart = (id) => async (dispatch, getState) => {


    const { data } = axios.get(`/api/products/${id}`)
}
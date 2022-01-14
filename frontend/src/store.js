import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { productListReducer, productDetailsReducer, productReviewCreateReducer, productTopRatedReducer } from './reducers/productReducers'
import { userDetailsReducer, userLoginReducer, userRegisterReducer, userUpdateProfileReducer } from './reducers/userReducers'

const reducer = combineReducers({
    productList : productListReducer,
    productDetails: productDetailsReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    productReviewCreate: productReviewCreateReducer,
    productTopRated: productTopRatedReducer,

})

const middleware = [thunk]



const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {

    userLogin: { userInfo: userInfoFromStorage },
  }

  const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store



import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import productsReducer from './productSlice'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  counter: counterReducer,
  products: productsReducer,
})

export default store = configureStore({
  reducer: rootReducer,
})

// export default configureStore({
//     reducer: {
//         counter: counterReducer,
//         products: productsReducer
//     }
// })
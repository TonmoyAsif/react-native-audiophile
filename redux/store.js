import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import productsReducer from './productSlice'
import cartReducer from './cartSlice'
import { combineReducers } from 'redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistReducer } from 'redux-persist'

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  blacklist: ['products']
}

const rootReducer = combineReducers({
  counter: counterReducer,
  products: productsReducer,
  cart: cartReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
})

// export default configureStore({
//     reducer: {
//         counter: counterReducer,
//         products: productsReducer
//     }
// })
import { configureStore } from '@reduxjs/toolkit'
import cardReducer from '../features/cardSlice.jsx'

const store = configureStore({
  reducer: {
    cards: cardReducer,
  },
})

export default store
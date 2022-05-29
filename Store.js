import { configureStore } from "@reduxjs/toolkit";
import navSlice from './utils/helpers/StoreHelpers.js'

const store = configureStore({
  reducer: {
    nav: navSlice
  }
})

export default store
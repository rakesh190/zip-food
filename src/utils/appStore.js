import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// Build the store
const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;

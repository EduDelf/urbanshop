import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice"; // Importamos el reducer del carrito

export const store = configureStore({
  reducer: {
    cart: cartReducer, // Registramos el reducer en la store
  },
});

export default store;
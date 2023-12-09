import { configureStore } from "@reduxjs/toolkit";


import  favoriteReducer  from "./favorite";

export const store =configureStore({
  reducer:{
    favoriteMealSlice:favoriteReducer,
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
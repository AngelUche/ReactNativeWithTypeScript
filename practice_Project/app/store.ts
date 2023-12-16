import { configureStore } from '@reduxjs/toolkit'

import ExpensesReducer from './expenses/expensesSlice'
import { emptySplitApi } from './api'

export const store = configureStore({
  reducer: {
    expeses:ExpensesReducer,


    [emptySplitApi.reducerPath]: emptySplitApi.reducer,
  },

  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(emptySplitApi.middleware),
  middleware: (getDefaultMiddleware) =>getDefaultMiddleware({
    serializableCheck: false,
  }).concat(emptySplitApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
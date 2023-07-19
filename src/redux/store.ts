import { configureStore } from '@reduxjs/toolkit';
import userReducer from './feacture/user/userslice';
import{ api } from './api/apiSlice';
import searchReducer from './feacture/search/searchSlice';
import cartReducer from './feacture/cart/cartslice';
const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    [api.reducerPath]: api.reducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export default store;
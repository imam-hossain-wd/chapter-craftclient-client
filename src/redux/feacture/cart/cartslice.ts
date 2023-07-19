import { IBook } from "@/types/booktypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICart {
  books: IBook[];
}

const initialState: ICart = {
  books: [],
};

const loadCartFromLocalStorage = (): ICart | undefined => {
  const cartData = localStorage.getItem("cart");
  if (cartData) {
    return JSON.parse(cartData);
  }
  return undefined;
};

const saveCartToLocalStorage = (cart: ICart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const initialCartState = loadCartFromLocalStorage() || initialState;

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addToBook: (state, action: PayloadAction<IBook>) => {
      state.books = [...state.books, { ...action.payload }];
      saveCartToLocalStorage(state);
    },
    removeFromBook: (state, action: PayloadAction<string>) => {
      const bookId = action.payload;
      state.books = state.books.filter((book) => book._id !== bookId);
      saveCartToLocalStorage(state);
    },
  },
});

export const { addToBook, removeFromBook } = cartSlice.actions;

export default cartSlice.reducer;

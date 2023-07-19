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
      state.books.push({ ...action.payload });
      saveCartToLocalStorage(state);
    },
  },
});

export const { addToBook } = cartSlice.actions;

export default cartSlice.reducer;

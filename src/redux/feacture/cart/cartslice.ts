
import { IBook } from "@/types/booktypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

type ReadingStatus = "Current Reading" | "Plan To Read" | "Finish Reading";

interface ICartBook extends IBook {
  readingStatus: ReadingStatus;
}

interface ICart {
  books: ICartBook[];
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
      const bookToAdd = action.payload;
      const isBookAlreadyAdded = state.books.some((book) => book._id === bookToAdd._id);

      if (!isBookAlreadyAdded) {
        const newBook: ICartBook = { ...bookToAdd, readingStatus: "Plan To Read" };
        state.books = [...state.books, newBook];
        saveCartToLocalStorage(state);
        toast.success("Book Added to wishlist");
      } else {
        toast.error("You already added the book to your wishlist!");
      }
    },
    removeFromBook: (state, action: PayloadAction<string>) => {
      const bookId = action.payload;
      state.books = state.books.filter((book) => book._id !== bookId);
      saveCartToLocalStorage(state);
    },
    updateReadingStatus: (state, action: PayloadAction<{ bookId: string; status: ReadingStatus }>) => {
      const { bookId, status } = action.payload;
      const bookIndex = state.books.findIndex((book) => book._id === bookId);

      if (bookIndex !== -1) {
        state.books[bookIndex].readingStatus = status;
        saveCartToLocalStorage(state);
      }
    },
  },
});

export const { addToBook, removeFromBook, updateReadingStatus } = cartSlice.actions;

export default cartSlice.reducer;

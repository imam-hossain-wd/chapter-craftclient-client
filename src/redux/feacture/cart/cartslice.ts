import { IBook } from "@/types/booktypes";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
interface ICart {
    books:IBook[]
}

const initialState : ICart = {
    books:[]
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToBook : (state, action : PayloadAction<IBook> )=> {
            state.books.push(action.payload)
        },
    }
})

export const {addToBook} = cartSlice.actions;

export default cartSlice.reducer;
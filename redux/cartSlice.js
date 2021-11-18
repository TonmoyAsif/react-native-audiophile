import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            const { payload } = action;
            const { cartProduct } = payload;

            const isItemInCart = state.find((item) => item.id === cartProduct.id);

            if(isItemInCart) {
                return state.map((item) => item.id === cartProduct.id ? { ...item, ...cartProduct } : item);
            } else {
                return [...state, { ...cartProduct }];
            }
        },
        deleteFromCart: (state, action) => {
        },
        reset: () => initialState
    }
})

export const { addToCart, deleteFromCart, reset } = cartSlice.actions;

export const selectCartLength = (state) => state.cart.length;

export default cartSlice.reducer;
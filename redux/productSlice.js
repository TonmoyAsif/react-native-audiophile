import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PRODUCT_IMAGE_MAP } from "../src/data/products-image-map";

const API_URL = "http://103.28.121.57/api";

const initialState = {
    products: [],
    status: 'idle',
    error: null,
};

export const fetchProducts = createAsyncThunk( 'products/fetchProducts', async () => {
    const response = await fetch(`${API_URL}/products`);
    return response.json();
});

export const productsSlice = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [fetchProducts.pending]: (state, action) => {
            state.status = 'loading';
        },
        [fetchProducts.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            const { payload } = action;
            payload.products.forEach(product => {
                product.featuredImage = PRODUCT_IMAGE_MAP[product.name].featuredImage;
                product.images = PRODUCT_IMAGE_MAP[product.name].images;
            });
            state.products = payload.products;
        },
        [fetchProducts.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        },
    },
})

export const selectStatus = state => state.products.status;
export const selectFeaturedProducts = state => state.products.products.filter(product => product.is_featured);

export default productsSlice.reducer;
// reducers/productReducer.js
import { createReducer } from "@reduxjs/toolkit";
import ProductActionTypes from "../actionTypes/product.actionTypes";

const initialState = {
  loading: false,
  error: null,
  addedProduct: null,
};

const productReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(ProductActionTypes.ADD_PRODUCT_REQUEST, (state) => ({
      ...state,
      loading: true,
      error: null,
    }))
    .addCase(ProductActionTypes.ADD_PRODUCT_SUCCESS, (state, action) => ({
      ...state,
      loading: false,
      addedProduct: action.payload,
      error: null,
    }))
    .addCase(ProductActionTypes.ADD_PRODUCT_FAILURE, (state, action) => ({
      ...state,
      loading: false,
      addedProduct: null,
      error: action.payload,
    }));
});

export default productReducer;

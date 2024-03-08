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
    }))
    .addCase(ProductActionTypes.FETCH_PRODUCTS_REQUEST, (state) => ({
      ...state,
      loading: true,
      error: null,
    }))
    .addCase(ProductActionTypes.FETCH_PRODUCTS_SUCCESS, (state, action) => ({
      ...state,
      loading: false,
      products: action.payload,
      error: null,
    }))
    .addCase(ProductActionTypes.FETCH_PRODUCTS_FAILURE, (state, action) => ({
      ...state,
      loading: false,
      products: null,
      error: action.payload,
    }));
});

export default productReducer;

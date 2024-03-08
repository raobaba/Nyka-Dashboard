// actions/productActions.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import ProductActionTypes from "../actionTypes/product.actionTypes";

const addProduct = createAsyncThunk(
  ProductActionTypes.ADD_PRODUCT_REQUEST,
  async (productData, { dispatch }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      dispatch({ type: ProductActionTypes.ADD_PRODUCT_REQUEST });
      const response = await axios.post(
        "http://localhost:8000/api/v1/products",
        productData,
        config
      );
      dispatch({
        type: ProductActionTypes.ADD_PRODUCT_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: ProductActionTypes.ADD_PRODUCT_FAILURE,
        payload: error.response.data.error,
      });
    }
  }
);

const fetchProducts = createAsyncThunk(
    ProductActionTypes.FETCH_PRODUCTS_REQUEST,
    async (_, { dispatch }) => {
      try {
        dispatch({ type: ProductActionTypes.FETCH_PRODUCTS_REQUEST });
        const response = await axios.get("http://localhost:8000/api/v1/products");
        dispatch({
          type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS,
          payload: response.data,
        });
      } catch (error) {
        dispatch({
          type: ProductActionTypes.FETCH_PRODUCTS_FAILURE,
          payload: error.response.data.error,
        });
      }
    }
  );
  

export { addProduct,fetchProducts };

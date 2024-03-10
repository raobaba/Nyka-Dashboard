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
        payload: error.response.data.error
      });
    }
  }
);

export const setCurrentPage = (page) => ({
  type: ProductActionTypes.SET_CURRENT_PAGE,
  payload: page,
});

export const setPageLimit = (limit) => ({
  type: ProductActionTypes.SET_PAGE_LIMIT,
  payload: limit,
});

export const filterProducts = (filterOptions) => ({
  type: ProductActionTypes.FILTER_PRODUCTS,
  payload: filterOptions,
});

export const sortProducts = (sortBy) => ({
  type: ProductActionTypes.SORT_PRODUCTS,
  payload: sortBy,
});

export const searchProducts = (searchTerm) => ({
  type: ProductActionTypes.SEARCH_PRODUCTS,
  payload: searchTerm,
});

const fetchProducts = createAsyncThunk(
  ProductActionTypes.FETCH_PRODUCTS_REQUEST,
  async (
    { currentPage, pageLimit, sort, order, search, filterOptions },
    { dispatch }
  ) => {
    try {
      dispatch({ type: ProductActionTypes.FETCH_PRODUCTS_REQUEST });
      console.log("Query Parameters:", {
        page: currentPage,
        limit: pageLimit,
        sort,
        order,
        search,
        ...filterOptions,
      });
      const response = await axios.get(
        "http://localhost:8000/api/v1/products",
        {
          params: {
            page: currentPage,
            limit: pageLimit,
            sort,
            order,
            search,
            ...filterOptions,
          },
        }
      );
      dispatch({
        type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: ProductActionTypes.FETCH_PRODUCTS_FAILURE,
        payload: error.response.data.error
      });
    }
  }
);

const editProduct = createAsyncThunk(
  ProductActionTypes.EDIT_PRODUCT_REQUEST,
  async ({ editData, productId }, { dispatch }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      dispatch({ type: ProductActionTypes.EDIT_PRODUCT_REQUEST });
      const response = await axios.put(
        `http://localhost:8000/api/v1/products/${productId}`,
        editData,
        config
      );
      dispatch({
        type: ProductActionTypes.EDIT_PRODUCT_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: ProductActionTypes.EDIT_PRODUCT_FAILURE,
        payload: error.response.data.error,
      });
    }
  }
);

const deleteProduct = createAsyncThunk(
  ProductActionTypes.DELETE_PRODUCT_REQUEST,
  async (productId, { dispatch }) => {
    try {
      dispatch({ type: ProductActionTypes.DELETE_PRODUCT_REQUEST });
      await axios.delete(`http://localhost:8000/api/v1/products/${productId}`);
      dispatch({
        type: ProductActionTypes.DELETE_PRODUCT_SUCCESS,
        payload: productId,
      });
    } catch (error) {
      dispatch({
        type: ProductActionTypes.DELETE_PRODUCT_FAILURE,
        payload: error.response.data.error,
      });
    }
  }
);

export { addProduct, fetchProducts, editProduct, deleteProduct };

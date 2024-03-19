import { createReducer } from "@reduxjs/toolkit";
import ProductActionTypes from "../actionTypes/product.actionTypes";

const initialState = {
  loading: false,
  error: null,
  addedProduct: null,
  products: [],
  filteredProducts: [],
  filterOptions: {},
  sortBy: 'price',
  searchTerm: '',
  currentPage: 1,  
  pageLimit: 10,  
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
    }))
    .addCase(ProductActionTypes.FILTER_PRODUCTS, (state, action) => ({
        ...state,
        filterOptions: action.payload,
      }))
      .addCase(ProductActionTypes.SORT_PRODUCTS, (state, action) => ({
        ...state,
        sortBy: action.payload,
      }))
      .addCase(ProductActionTypes.SEARCH_PRODUCTS, (state, action) => ({
        ...state,
        searchTerm: action.payload,
      }))
      .addCase(ProductActionTypes.EDIT_PRODUCT_REQUEST, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(ProductActionTypes.EDIT_PRODUCT_SUCCESS, (state, action) => ({
        ...state,
        loading: false,
        addedProduct: action.payload,
        error: null,
      }))
      .addCase(ProductActionTypes.EDIT_PRODUCT_FAILURE, (state, action) => ({
        ...state,
        loading: false,
        addedProduct: null,
        error: action.payload,
      }))
      .addCase(ProductActionTypes.DELETE_PRODUCT_REQUEST, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(ProductActionTypes.DELETE_PRODUCT_SUCCESS, (state, action) => {
        const updatedProducts = state.products.filter(product => product._id !== action.payload);
        return {
          ...state,
          loading: false,
          products: updatedProducts,
          error: null,
        };
      })
      .addCase(ProductActionTypes.DELETE_PRODUCT_FAILURE, (state, action) => ({
        ...state,
        loading: false,
        error: action.payload,
      }))
      .addCase(ProductActionTypes.SET_CURRENT_PAGE, (state, action) => ({
        ...state,
        currentPage: action.payload,
      }))
      .addCase(ProductActionTypes.SET_PAGE_LIMIT, (state, action) => ({
        ...state,
        pageLimit: action.payload,
      }));
});

export default productReducer;

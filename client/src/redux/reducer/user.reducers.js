import { createReducer } from "@reduxjs/toolkit";
import ActionTypes from "../actionTypes/user.actionTypes";

const initialState = {
  user: null,
  loading: false,
  error: null,
};


const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(ActionTypes.SIGNUP_REQUEST, (state) => ({
      ...state,
      loading: true,
      error: null,
    })) 
    .addCase(ActionTypes.SIGNUP_SUCCESS, (state, action) => ({
      ...state,
      loading: false,
      user: action.payload,
      error: null,
    }))
    .addCase(ActionTypes.SIGNUP_FAILURE, (state, action) => ({
        ...state,
        loading: false,
        user: null,
        error: action.payload,
    }))
    .addCase(ActionTypes.LOGIN_REQUEST, (state) => ({
      ...state,
      loading: true,
      error: null,
    }))
    .addCase(ActionTypes.LOGIN_SUCCESS, (state, action) => ({
      ...state,
      loading: false,
      user: action.payload,
      error: null,
    }))
    .addCase(ActionTypes.LOGIN_FAILURE, (state, action) => ({
      ...state,
      loading: false,
      user: null,
      error: action.payload,
    }))
    .addCase(ActionTypes.LOGOUT_REQUEST, (state) => ({
      ...state,
      loading: true,
      error: null,
    }))
    .addCase(ActionTypes.LOGOUT_SUCCESS, (state) => ({
      ...state,
      loading: false,
      user: null,
      error: null,
    }))
    .addCase(ActionTypes.LOGOUT_FAILURE, (state, action) => ({
      ...state,
      loading: false,
      user: null,
      error: action.payload,
    }))
    .addCase(ActionTypes.CLEAR_ERROR, (state) => ({
      ...state,
      error: null,
    }));
});

export default userReducer;

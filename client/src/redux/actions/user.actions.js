import { createAsyncThunk } from "@reduxjs/toolkit";
import ActionTypes from "../actionTypes/user.actionTypes";
import axios from "axios";

const signup = createAsyncThunk(
  ActionTypes.SIGNUP_REQUEST,
  async (userData, { dispatch }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      dispatch({ type: ActionTypes.SIGNUP_REQUEST });
      const response = await axios.post(
        "http://localhost:8000/api/v1/signup",
        userData,
        config
      );
      console.log("SignUp response", response);
      dispatch({
        type: ActionTypes.SIGNUP_SUCCESS,
        payload: response.data.user,
      });
    } catch (error) {
      console.error("Signup error:", error.response.data.error);
      dispatch({
        type: ActionTypes.SIGNUP_FAILURE,
        payload: error.response.data.error,
      });
    }
  }
);

const login = createAsyncThunk(
  ActionTypes.LOGIN_REQUEST,
  async (userData, { dispatch }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      dispatch({ type: ActionTypes.LOGIN_REQUEST });

      const response = await axios.post(
        "http://localhost:8000/api/v1/login",
        userData,
        config
      );
      console.log("Login response", response);
      dispatch({
        type: ActionTypes.LOGIN_SUCCESS,
        payload: response.data.user,
      });
    } catch (error) {
      console.error("Signup error:", error.response.data.error);
      dispatch({
        type: ActionTypes.LOGIN_FAILURE,
        payload: error.response.data.error,
      });
    }
  }
);

const logout = createAsyncThunk(
  ActionTypes.LOGOUT_REQUEST,
  async (_, { dispatch }) => {
    try {
      dispatch({ type: ActionTypes.LOGOUT_REQUEST });
      const response = await axios.get("http://localhost:8000/api/v1/logout");
      console.log("Logout response", response);
      dispatch({
        type: ActionTypes.LOGOUT_SUCCESS,
        payload: response.data.user,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.LOGOUT_FAILURE,
        payload: error.response ? error.response.data : error.message,
      });
    }
  }
);

const clearError = createAsyncThunk(
  ActionTypes.CLEAR_ERROR,
  async (_, { dispatch }) => {
    dispatch({ type: ActionTypes.CLEAR_ERROR });
  }
);

export { signup, login, logout, clearError };

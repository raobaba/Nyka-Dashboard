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

      dispatch({
        type: ActionTypes.SIGNUP_SUCCESS,
        payload: response.data.user,
      });
    } catch (error) {
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

      dispatch({
        type: ActionTypes.LOGIN_SUCCESS,
        payload: response.data.user,
      });
      return response.data;
    } catch (error) {
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
      dispatch({
        type: ActionTypes.LOGOUT_SUCCESS,
        payload: response.data.user,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.LOGOUT_FAILURE,
        payload: error.response.data.error,
      });
    }
  }
);

export { signup, login, logout };
// user.reducers.js
import { createReducer } from '@reduxjs/toolkit';
import { signup, login, logout } from '../actions/user.actions';

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(signup.pending, (state) => ({ ...state, loading: true, error: null }))
    .addCase(signup.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      user: action.payload,
      error: null,
    }))
    .addCase(signup.rejected, (state, action) => ({
      ...state,
      loading: false,
      user: null,
      error: action.error.message || 'Signup failed',
    }))
    .addCase(login.pending, (state) => ({ ...state, loading: true, error: null }))
    .addCase(login.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      user: action.payload,
      error: null,
    }))
    .addCase(login.rejected, (state, action) => ({
      ...state,
      loading: false,
      user: null,
      error: action.error.message || 'Login failed',
    }))
    .addCase(logout.pending, (state) => ({ ...state, loading: true, error: null }))
    .addCase(logout.fulfilled, (state) => ({
      ...state,
      loading: false,
      user: null,
      error: null,
    }))
    .addCase(logout.rejected, (state, action) => ({
      ...state,
      loading: false,
      user: null,
      error: action.error.message || 'Logout failed',
    }));
});

export default userReducer;

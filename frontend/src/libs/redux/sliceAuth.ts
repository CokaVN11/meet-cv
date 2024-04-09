import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type AuthState = {
  token: string | null;
  role: string | null;
};

const initialState: AuthState = {
  token: null,
  role: null,
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<{ token: string, role: string }>) => {
      return {
        token: action.payload.token,
        role: action.payload.role,
      };
    },
    clearAuth: () => {
      return {
        token: null,
        role: null,
      };
    },
  },
});

export const { setAuth, clearAuth } = AuthSlice.actions;
export const AuthReducer = AuthSlice.reducer;

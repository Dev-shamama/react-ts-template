import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    auth: false,
    isLoading: true
  },
  reducers: {
    setUserProfile: (state) => {
      state.auth = true
      state.isLoading = false
    },
    setUserLogin: (state) => {
      state.auth = true
      state.isLoading = false
    },
    setUserLogout: (state) => {
      state.auth = false
      state.isLoading = false
    },
  },
})

export const { setUserLogin, setUserLogout, setUserProfile } = authSlice.actions

export default authSlice.reducer
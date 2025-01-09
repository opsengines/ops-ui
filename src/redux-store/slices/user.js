// Third-party Imports
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: '',
  username: '',
  fullName: '',
  email: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      const { token, username, fullName, email } = action.payload

      state.token = token || state.token
      state.username = username || state.username
      state.fullName = fullName || state.fullName
      state.email = email || state.email
    }
  }
})
export const { setUser } = userSlice.actions
export default userSlice.reducer

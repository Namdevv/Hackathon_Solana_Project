import { createSlice } from '@reduxjs/toolkit'
import { localUserServ } from '../service/localService';
// phím tắt rxslice

const initialState = {
    userInfor: localUserServ.get(),
}

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
        setUserLogin: (state, action) =>{
            state.userInfor= action.payload;
        },
        setUserSignUp: (state, action) =>{
          state.userInfor= action.payload;
      }
  }
});




export const { setUserLogin, setUserSignUp } = userSlice.actions

export default userSlice.reducer
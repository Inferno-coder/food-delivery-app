import  { createSlice } from "@reduxjs/toolkit"

const initialState={
    isAuth:false,
    user:null
}

export const authSlice=createSlice({
    name:'authentication',
    initialState,
    reducers:{
        login:(state,action)=>{
           state.isAuth=true;
           state.user=action.payload
        },
        logout:(state)=>{
         state.isAuth=false;
         state.user=null
        }
    }
})

export const{login,logout}=authSlice.actions;
export default authSlice.reducer;
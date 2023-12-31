import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name : "",
    email : "",
    photo : ""
}
//iss array mai user ki details dalengi

const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {
        setUserLogin:(state , action) => {
            //ye object ni hai fucntion k andar hone wlai cheez hai bhaiji
            state.name=action.payload.name; //user ka data ko store karenge
            state.email=action.payload.email;
            state.photo=action.payload.photo;
        }
        ,
        setSignOut : (state) => {
            state.name = null;
            state.email = null;
            state.photo = null;
        }
    }
});

export const {setUserLogin,setSignOut} = userSlice.actions;

export const selectUserName = (state) => state.user.name; //kahin agar user ka name access karna ho from the state, so uske liye export krre
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;

export default userSlice.reducer;

//ab humne user ka data store krne k liye state bnadi jo globally share ho skti so ab bas store ko btana k ye ho chuka hai so we'll send a reducer uske pass
// jab ye data store krna hoga into state tab action run hoga from a component (sidha nhi reducer ko bolenge k action kar and ye reducer is in the store) phir uske baad action perform hoga and store mai change aayega
 
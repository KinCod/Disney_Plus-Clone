import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../features/movie/movieSlice';
import userReducer  from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    movie : movieReducer,         //yeh ek movieSlice hai jismai reducer pda hai to lelo and movie mai daal do
    user : userReducer
  },
});

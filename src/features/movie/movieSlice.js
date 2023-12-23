import { createSlice } from "@reduxjs/toolkit";

//initially we make a initial state (jo usestate mai bhi by default hoti thi)
const initialState = {
    movies : []             //nothing initially
}

const movieSlice = createSlice({
    name : "movie",
    initialState,
    reducers: {            
        setMovie : (state , action )=>{   //action se payload aaega and state by default dena hota as initial state mai change bhi toh krna hai
            state.movies = action.payload;  //add the new movie to existing list of movies (actions se jo payload aayega ,ie, iss case mai movies,, vo payload will be stored in the movies state)
            // state.movies = "halalalala movie"; //mtlb im just showing k were just giving data to the STATE : MOVIES jo inititally khaali tha
        }
    }

});

export const {setMovie} = movieSlice.actions;      //exporting the set movie as action to be done on our initial state 

export const selectMovies = (state) =>state.movie.movies;  //jitni bhi state mai movies hai that sent into selectMovies and ye export kardia (so basically jo movies array mai movies hongi unko access kar skte)

export default movieSlice.reducer;     //ye toh export krna hi hota
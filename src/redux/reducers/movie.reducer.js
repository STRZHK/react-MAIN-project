import {createSlice} from "@reduxjs/toolkit";

const initialState ={
    movie:[]
}

const movieSlice = createSlice({
    name:'movieSlice',
    initialState,
    reducers:{

    }
});

const {reducer:movieReducer} = movieSlice;

export {
    movieReducer
}
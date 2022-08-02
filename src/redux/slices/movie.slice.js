import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {baseURLMovies} from "../../services";

const initialState = {
    movies: [],
    genres: [],
    isLoading: false,
    serverError:null
};

const getMovies = createAsyncThunk(
    'movieSlice/getMovies',
    async (_, {rejectWithValue}) => {
        try {
            const movies = await fetch(baseURLMovies)
                .then(response => {
                    if (!response.ok) {
                        throw Error('Bad Request!!!')
                    }
                    return response.json()
                });
            return movies.results;
        } catch (e) {
            return rejectWithValue(e.message)
        }

    }
);

const movieSlice = createSlice({
    name: 'MovieSlice',
    initialState,
    extraReducers: {
        [getMovies.fulfilled]: (state, action) => {
            state.isLoading = false
            state.movies = action.payload
        },
        [getMovies.pending]: (state) => {
            state.isLoading = true
        },
        [getMovies.rejected]: (state, action) => {
            state.serverError = action.payload
        }
    }
});

const {reducer: movieReducer, actions: {}} = movieSlice;

const movieActions = {
    getMovies
}

export {
    movieReducer,
    movieActions
}
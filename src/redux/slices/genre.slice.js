import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {baseURLGenres} from "../../services";

const initialState = {
    genres: [],
    isLoading: false,
    serverError:null
};

const getGenres = createAsyncThunk(
    'genreSlice/getGenres',
    async (_, {rejectWithValue}) => {
        try {
            const genres = await fetch(baseURLGenres)
                .then(response => {
                    if (!response.ok) {
                        throw Error('Bad Request!!!')
                    }
                    return response.json()
                });
            return genres.genres;
        } catch (e) {
            return rejectWithValue(e.message)
        }

    }
);

const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    extraReducers: {
        [getGenres.fulfilled]: (state, action) => {
            state.isLoading = false
            state.genres = action.payload
        },
        [getGenres.pending]: (state) => {
            state.isLoading = true
        },
        [getGenres.rejected]: (state, action) => {
            state.serverError = action.payload
        }
    }
});

const {reducer: genresReducer, actions: {}} = genresSlice;

const genresActions = {
    getGenres
};

export {
    genresReducer,
    genresActions
};
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {movieReducer} from "./reducers/movie.reducer";

const rootReducer = combineReducers({
    movie: movieReducer
});

const setupStore = () => configureStore({
    reducer:rootReducer
});

export {
    setupStore
}
import { useDispatch, useSelector } from "react-redux";
import {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {movieActions} from "../../redux";
import {MovieInfo} from "../MovieInfo/MovieInfo";

export const MoviesList = () => {
    const dispatch = useDispatch();
    const {movies, isLoading, serverError} = useSelector(state => state.movieReducer);


    useEffect(() => {
        dispatch(movieActions.getMovies())
    }, [])

    console.log(movies);

    const movieIdState = useState(null);


    return (
        <div className={"container"}>
            <Outlet/>
            <div className={"grid"}>
                {
                    movies.map((movie)=> <MovieInfo key={movie.id} movie={movie} movieIdState={movieIdState}/>)
                }
                <hr/>
                {isLoading&& <h1>Loading</h1>}
                {serverError&& <h1>{serverError}</h1>}
            </div>
        </div>
    )
}
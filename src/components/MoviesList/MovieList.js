import { useDispatch, useSelector } from "react-redux";
import {useEffect, useState} from 'react';

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


    function loadmore() {
        console.log("hello");
    }

    return (
        <div className={"container"}>
            <div className={"grid"}>
                {
                    movies.map((movie)=>
                        <MovieInfo key={movie.id} movie={movie} movieIdState={movieIdState}/>)
                }
                <hr/>
                {isLoading&& <h1>Loading</h1>}
                {serverError&& <h1>{serverError}</h1>}
            </div>
            <div className={"btnMoreDiv"}><button className={"btnMore"} onClick={loadmore}>More</button></div>
        </div>
    )
}
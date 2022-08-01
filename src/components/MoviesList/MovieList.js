import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import MovieInfo from "../MovieInfo/MovieInfo";
import {baseURLMovies} from "../../services";

export default function MovieList() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(baseURLMovies)
            .then((res)=>res.json())
            .then(data=>{
                // console.log(data);
                setMovies(data.results);
            })
    }, []);


    return (
        <div className={"container"}>
            <Outlet/>
            <div className={"grid"}>
                {
                    movies.map((movie)=> <MovieInfo key={movie.id} movie={movie}/>)
                }
            </div>
        </div>
    )
}
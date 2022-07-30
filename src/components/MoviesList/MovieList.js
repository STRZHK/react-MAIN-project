import {useEffect, useState} from "react";

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
    }, [])

    return (
        <div>
            {
                movies.map((movie)=> <MovieInfo key={movie.id} movie={movie}/>)
            }
        </div>
    )
}
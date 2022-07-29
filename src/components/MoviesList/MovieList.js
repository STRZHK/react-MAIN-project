import {useSelector} from "react-redux";

import MovieInfo from "../MovieInfo/MovieInfo";

export default function MovieList() {
    const {movies} = useSelector(state => state.movie)
    return (
        <div>

        </div>
    )
}
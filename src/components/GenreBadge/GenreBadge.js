import { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";

import {genresActions} from "../../redux";
import GenrePage from "../GenrePage/GenrePage";

export const GenreBadge = () => {
    const dispatch = useDispatch();
    const {genres, isLoading, serverError} = useSelector(state => state.genresReducer);

    useEffect(() => {
        dispatch(genresActions.getGenres());
        console.log(genres);
    }, []);

    console.log(genres);

    return (<div className={"genreList"}>
        {genres.map(genre => <GenrePage key={genre.id} genre={genre}/>)}
        <hr/>
        {isLoading&& <h1>Loading</h1>}
        {serverError&& <h1>{serverError}</h1>}
    </div>)
}
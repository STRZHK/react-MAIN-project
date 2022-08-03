import {apiImage} from "../../services";
import MovieDetails from "../MovieDetails/MovieDetails";

export function MovieInfo({movie, movieIdState}) {

    const {original_title, poster_path, vote_average, id} = movie;

    const [movieId, setmovieId] = movieIdState;


    return (
        <div className={"movieCard"}>
            <h2 className={"titleOfMovie"}>{original_title}</h2>
                 <img className={"movieIamge"} src={apiImage+poster_path}/>
                     <p className={"popularity"}>Rating: <b>{vote_average}</b></p>
                <div className={"movieInfoBtnDiv"}>
                    <button className={"movieInfoBtn"} onClick={()=>setmovieId(id)}>More</button>
                    {movieId===id&& <MovieDetails movieId={id} movie={movie}/>}
                </div>
        </div>
    )
}
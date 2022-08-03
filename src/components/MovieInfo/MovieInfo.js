import {apiImage} from "../../services";
import MovieDetails from "../MovieDetails/MovieDetails";

export function MovieInfo({movie, movieIdState}) {

    const {original_title, poster_path,original_language, overview, popularity, vote_count,vote_average, id} = movie;

    const [movieId, setmovieId] = movieIdState;


    return (
        <div className={"movieCard"}>
            <h2 className={"titleOfMovie"}>{original_title}</h2>
                 <img className={"movieIamge"} src={apiImage+poster_path}/>
                     <p className={"popularity"}>Rating: <b>{vote_average}</b></p>
            <div>
                <div className={"movieInfoBtnDiv"}>
                    <button className={"movieInfoBtn"} onClick={()=>setmovieId(id)}>More</button>
                    {movieId===id&& <MovieDetails movieId={id} movie={movie}/>}
                </div>
                {/*<div className={"movieInfo"}>*/}
                {/*    <p className={"popularity"}><b>Rating</b> {vote_average}</p>*/}
                {/*    <p className={"language"}><b>Language:</b> {original_language}</p>*/}
                {/*    <p className={"overview"}><b>Overview:</b> {overview}</p>*/}
                {/*    <p className={"Voutes"}><b>Voutes:</b> {vote_count}</p>*/}
                {/*    <p className={"popularity"}><b>Popularity:</b> {popularity}</p>*/}
                {/*</div>*/}

            </div>
        </div>
    )
}
import {apiImage} from "../../services";

export default function MovieInfo({movie}) {
    const {original_title, poster_path,original_language, overview, popularity, vote_count} = movie;
    return (
        <div>
            <h2>{original_title}</h2>
            <img src={apiImage+poster_path}/>
            <div><b>Language:</b> {original_language}</div>
            <div><b>Overview:</b> {overview}</div>
            <div><b>Popularity:</b> {popularity}</div>
            <div><b>Voutes:</b> {vote_count}</div>
            <hr/>
        </div>
    )
}
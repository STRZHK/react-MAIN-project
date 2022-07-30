import {apiImage} from "../../services";

export default function MovieInfo({movie}) {
    const {original_title, poster_path,original_language, overview, popularity, vote_count} = movie;
    return (
        <div className={"movieCard"}>
            <h2 className={"titleOfMovie"}>{original_title}</h2>
            <img className={"movieIamge"} src={apiImage+poster_path}/>
            <div>
                <div className={"descriptions"}>
            <p className={"language"}><b>Language:</b> {original_language}</p>
            <p className={"overview"}><b>Overview:</b> {overview}</p>
            <p className={"popularity"}><b>Popularity:</b> {popularity}</p>
            <p className={"popularity"}><b>Voutes:</b> {vote_count}</p>
                </div>
            </div>
        </div>
    )
}
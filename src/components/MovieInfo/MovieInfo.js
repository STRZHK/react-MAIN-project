import {apiImage} from "../../services";

export function MovieInfo({movie}) {

    const {original_title, poster_path,original_language, overview, popularity, vote_count} = movie;

    return (
        <div className={"movieCard"}>
            <h2 className={"titleOfMovie"}>{original_title}</h2>
            <img className={"movieIamge"} src={apiImage+poster_path}/>
            <div>
                <p className={"popularity"}><b>Popularity:</b> {popularity}</p>

                <div className={"movieInfo"}>
            <p className={"language"}><b>Language:</b> {original_language}</p>
            <p className={"overview"}><b>Overview:</b> {overview}</p>
            <p className={"Voutes"}><b>Voutes:</b> {vote_count}</p>
                </div>
            </div>
        </div>
    )
}
export default function MovieDetails({movie}) {

    const {original_language, overview, popularity, vote_count,vote_average} = movie;

    return (
        <div>
                <div className={"movieInfo"}>
                        <p className={"language"}><b>Language:</b> {original_language}</p>
                        <p className={"overview"}><b>Overview:</b> {overview}</p>
                        <p className={"Voutes"}><b>Voutes:</b> {vote_count}</p>
                        <p className={"popularity"}><b>Popularity:</b> {popularity}</p>
                </div>
            </div>
    )
}
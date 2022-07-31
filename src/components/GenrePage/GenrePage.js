export default function GenrePage({genre}) {
    const {name} = genre;
    return (
        <div className={"genreDiv"}>
            <div>{name}</div>
        </div>
    )
}
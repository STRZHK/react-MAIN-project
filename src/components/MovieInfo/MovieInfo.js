export default function MovieInfo({movie}) {
    const {id, name} = movie;
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
        </div>
    )
}
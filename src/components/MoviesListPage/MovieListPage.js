import {useLocation} from "react-router-dom";

export default function MovieListPage() {

    let location = useLocation();
    let {state:movie} = location;

    return (
        <div>
            {movie.id} - {movie.title}
        </div>
    )
}
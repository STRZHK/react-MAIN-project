import {useEffect, useState} from "react";

import {baseURLGenres} from "../../services";
import GenrePage from "../GenrePage/GenrePage";

export default function GenreBadge() {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        fetch(baseURLGenres)
            .then((res)=>res.json())
            .then(data=>{
                // console.log(data);
                setGenres(data.genres);
            })
    }, [])

    return (
        <div>
            {
                genres.map((genre)=> <GenrePage key={genre.id} genre={genre}/>)
            }
        </div>
    )
}
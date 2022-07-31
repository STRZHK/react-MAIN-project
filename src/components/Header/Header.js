import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h2 className={"headerTitle"}>Choose your movie and chill</h2>
            <ul className={"headerMenu"}>
                <div className={"headerMovie"}><Link to={'/movies'}>Movies</Link></div>
                <div className={"headerGenre"}><Link to={'/genres'}>Genres</Link></div>
            </ul>
        </div>
    )
}

export default Header;
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h2>Navigator</h2>
            <ul>
                <li><Link to={'/movies'}>Movies</Link></li>
                <li><Link to={'/genres'}>Genres</Link></li>
            </ul>
        </div>
    )
}

export default Header;
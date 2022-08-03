import {Link} from "react-router-dom";
import {Search} from "../search/search";
import {Outlet} from "react-router-dom";

const Header = () => {
    return (
        <div className={"header"}>
            <div className={"headerMenu"}>
                <div className={"headerMovie"}><Link to={'/movies'}>Movies</Link></div>
                <div className={"headerGenre"}><Link to={'/genres'}>Genres</Link></div>
            </div>
            <Search/>
            <Outlet/>
        </div>
    )
}

export default Header;
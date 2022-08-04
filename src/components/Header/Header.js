import {Link} from "react-router-dom";
import {Search} from "../search/search";
import {Outlet} from "react-router-dom";
import UserInfo from "../UserInfo/UserInfo";

const Header = () => {
    return (
        <div className={"header"}>
            <div className={"headerMenu"}>
                <div className={"headerTitle"}><Link to={'/movies'}>Movies</Link></div>
                <div className={"headerTitle"}><Link to={'/genres'}>Genres</Link></div>
                <div className={"headerTitle"}><Link to={'/tvshows'}>TV shows</Link></div>
                <div className={"headerTitle"}><Link to={'/music'}>Music</Link></div>
                <div className={"headerTitle"}><Link to={'/games'}>Games</Link></div>
                <div className={"headerTitle"}><Link to={'/apps'}>Apps</Link></div>
            </div>
            <div className={"UserInfo"}><UserInfo/></div>
            <div className={"Search"}><Search/></div>

            <Outlet/>
        </div>
    )
}

export default Header;
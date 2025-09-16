import { Link, Outlet } from "react-router-dom";

const Movies = () => {
    return (
        <div>
            <h1>Movies Page!</h1>
            <nav>
                <Link to="/movies/ironman3" className="nav-link">Iron Man 3</Link>
                <Link to="/movies/infinityWar" className="nav-link">Infinity War</Link>
                <Link to="/movies/endgame" className="nav-link">Endgame</Link>
            </nav>
            <Outlet />
        </div>
    )
}

export default Movies;
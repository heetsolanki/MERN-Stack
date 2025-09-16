import { Link } from "react-router-dom";

function MainLink() {
    return(
        <div>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/movies" className="nav-link">Movies</Link>
            <Link to="/about" className="nav-link">About</Link>
        </div>
    )
}

export default MainLink;
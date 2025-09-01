import { Link } from "react-router-dom";

function Linkp() {
    return (
        <nav>
            <Link exact to="/" className="nav-link">Home</Link>
            <Link to="/post" className="nav-link">Post</Link>
            <Link to="/about" className="nav-link">About</Link>
        </nav>
    );
}

export default Linkp;
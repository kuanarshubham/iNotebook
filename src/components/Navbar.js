import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {

    let location = useLocation();

    const [active, setactive] = useState("");

    useEffect(() => {
        setactive("active");
    }, [location])


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
                <Link className="navbar-brand mx-3" to="#">iNotebook</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className={`nav-link ${location.pathname === "/" ? active : ""}`} to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/about' ? active : ""}`} to="/about">About</Link>
                        </li>
                    </ul>
                </div>
                <form className="d-flex">
                    <Link type="submit" to= "/signup" className="btn btn-primary mx-2">Sign-up</Link>
                    <Link type="submit" to= "/login" className="btn btn-primary mx-4">Log-in</Link>
                </form>
            </nav>
        </>
    );
}

export default Navbar;
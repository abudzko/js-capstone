import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import logo from "assets/logo.svg"

export default function Header(props) {
    return (
        <header>
            <Link to="/" className="nav-item"> <img src={logo} alt="Logo" /></Link>
            <Navigation />
        </header>
    );
}
import { Link } from 'react-router-dom';

export default function Navigation(props) {
    return (
        <nav>
            <Link to="/" className="nav-item">HOME</Link>
            <Link to="/about" className="nav-item">ABOUT</Link>
            <Link to="/menu" className="nav-item">MENU</Link>
            <Link to="/reservation" className="nav-item">RESERVATION</Link>
            <Link to="/order-online" className="nav-item">ORDER ONLINE</Link>
            <Link to="/login" className="nav-item">LOGIN</Link>
        </nav >
    );
}

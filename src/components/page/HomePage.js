import { restaurantLocation, siteName } from "const";
import { Link } from "react-router-dom";

export default function HomePage(props) {
    return (
        <>
            <article className="homePage">
                <div className="homePageDescription">
                    <h1>{siteName}</h1>
                    <p>{restaurantLocation}</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, voluptates! Reprehenderit ducimus quia cupiditate corporis repudiandae animi fugit quasi eveniet perferendis, molestias quas nisi nesciunt soluta labore placeat debitis non.</p>
                    <div className="reserveTableButton">
                        <Link to="/reservation" className="nav-item">Reserve a table</Link>
                    </div>
                </div>
            </article>
        </>
    );
}
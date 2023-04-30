import { siteName } from "const";
import { Link } from "react-router-dom";
import homePageImage from "assets/home-page-image.jpg";
import DishCard from "./DishCard";
import ShortSiteInfo from "components/ShortSiteInfo";
import RatingCard from "./RatingCard";
import { getDishes, getRatings } from "data/api";
import { useEffect, useState } from "react";

export default function HomePage(props) {
    const [dishes, setDishes] = useState([]);
    const [ratings, setRatings] = useState([]);

    useEffect(() => {
        getDishes()
            .then(
                (dishes) => {
                    const components = dishes.map(dish => {
                        return <DishCard key={dish.name} dish={dish} />
                    });
                    setDishes(components);
                });
        getRatings()
            .then(
                (ratings) => {
                    const components = ratings.map(rating => {
                        return <RatingCard key={rating.id} rating={rating} />
                    })
                    setRatings(components);
                }
            )
    }, []);
    return (
        <>
            <article>
                <ShortSiteInfo />
                <div className="homePage">
                    <div className="homePageDescription">
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, voluptates! Reprehenderit ducimus quia cupiditate corporis repudiandae animi fugit quasi eveniet perferendis, molestias quas nisi nesciunt soluta labore placeat debitis non.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, voluptates! Reprehenderit ducimus quia cupiditate corporis repudiandae animi fugit quasi eveniet perferendis, molestias quas nisi nesciunt soluta labore placeat debitis non.</p>
                            <Link to="/reservation" aria-label="On Click" className="mainButton">Reserve a table</Link>
                        </div>
                        <div className="homePageDescriptionImage">
                            <img src={homePageImage} alt={siteName} />
                        </div>
                    </div>
                    <div className="homePageSpecials">
                        <h1>This week specials</h1>
                        <div >
                            <Link to="/menu" aria-label="On Click" className="nav-item mainButton">Online Menu</Link>
                        </div>
                        <div className="specialsDishes">
                            {dishes}
                        </div>
                    </div>
                    <div className="homePageTestimonials">
                        <h1>Testimonials</h1>
                        <div className="homePageRatings">
                            {ratings}
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
}

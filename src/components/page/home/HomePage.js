import { siteName, dishes, ratings } from "const";
import { Link } from "react-router-dom";
import homePageImage from "assets/home-page-image.jpg";
import DishCard from "./DishCard";
import ShortSiteInfo from "components/ShortSiteInfo";
import RatingCard from "./RatingCard";

export default function HomePage(props) {
    return (
        <>
            <article>
                <ShortSiteInfo />
                <div className="homePage">
                    <div className="homePageDescription">
                        <div>

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, voluptates! Reprehenderit ducimus quia cupiditate corporis repudiandae animi fugit quasi eveniet perferendis, molestias quas nisi nesciunt soluta labore placeat debitis non.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, voluptates! Reprehenderit ducimus quia cupiditate corporis repudiandae animi fugit quasi eveniet perferendis, molestias quas nisi nesciunt soluta labore placeat debitis non.</p>
                            <Link to="/reservation" className="mainButton">Reserve a table</Link>
                        </div>
                        <div className="homePageDescriptionImage">
                            <img src={homePageImage} alt={siteName} />
                        </div>
                    </div>
                    <div className="homePageSpecials">
                        <h1>This week specials</h1>
                        <div >
                            <Link to="/menu" className="nav-item mainButton">Online Menu</Link>
                        </div>
                        <div className="specialsDishes">
                            {dishes.map(dish => {
                                return <DishCard key={dish.name} dish={dish} />
                            })}
                        </div>
                    </div>
                    <div className="homePageTestimonials">
                        <h1>Testimonials</h1>
                        <div className="homePageRatings">
                            {ratings.map(rating => {
                                return <RatingCard key={rating.id} rating={rating} />
                            })}
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
}

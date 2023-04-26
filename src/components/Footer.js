import { restaurantLocation, siteName } from "const";

export default function Footer(props) {
    return (
        <footer>
            <div className="footerDescription">
                <h1>{siteName}</h1>
                <p>{restaurantLocation}</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae vel maiores, ipsum corporis ex aliquid possimus non harum aspernatur nulla, error quos sequi sapiente sint repudiandae voluptates, voluptatibus laudantium! Corrupti?</p>
            </div>
            <div className="footerImage">
                <img />
                <img />
            </div>
        </footer>
    );
}
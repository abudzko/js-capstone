import ShortSiteInfo from "./ShortSiteInfo";

export default function Footer(props) {
    return (
        <footer>
            <div className="footerDescription">
                <ShortSiteInfo />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae vel maiores, ipsum corporis ex aliquid possimus non harum aspernatur nulla, error quos sequi sapiente sint repudiandae voluptates, voluptatibus laudantium! Corrupti?</p>
            </div>
            <div className="footerImage">
                <img />
                <img />
            </div>
        </footer>
    );
}
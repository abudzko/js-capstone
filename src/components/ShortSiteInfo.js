import { restaurantLocation, siteName } from "const";

export default function ShortSiteInfo(props) {
    return (
        <div className="shortSiteInfo">
            <h1>{siteName}</h1>
            <p>{restaurantLocation}</p>
        </div>
    );
}

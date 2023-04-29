import star from "assets/star.png";
export const BACK_TO_HOME_TEXT = "Home";
export const siteName = "Little Lemon";
export const restaurantLocation = "Chicago";

export const startIcon = () => { return <img src={star} alt="Star" /> }

export function formatDate(date) {
    let month = extendNumber(date.getMonth() + 1);
    let day = extendNumber(date.getDate());
    let hours = extendNumber(date.getHours());
    let minutes = extendNumber(date.getMinutes());
    return `${date.getFullYear()}-${month}-${day} ${hours}:${minutes}`;
}

function extendNumber(value) {
    if (value < 10) {
        value = "0" + value
    }
    return value;
}

import star from "assets/star.png"
export default function RatingCard(props) {
    const rating = props.rating;
    return (
        <div className="ratingCard">
            {stars(rating.score)}
            {rating.userImg()}
            <p>{rating.text}</p>
        </div>
    );
}

function stars(count) {
    const stars = [];
    for (let i = 0; i < count; i++) {
        stars.push(<img className="star" key={i} src={star} alt="star" />);
    }
    return (
        <div className="stars">{stars}</div>
    );
}

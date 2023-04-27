export default function DishCard(props) {
    const dish = props.dish;
    return (
        <div className="dishCard">
            {dish.img()}
            <h3>{dish.name}</h3>
            <p>{dish.description}</p>
            <p>{dish.details}</p>
        </div>
    );
}

export default function Counter(props) {
    return (
        <div className="counter">
            <input type="button" value={"-"} className="counterControl leftCounterControl" onClick={() => props.add(-1)} />
            <p className="counterText">{props.count}</p>
            <input type="button" value={"+"} className="counterControl rightCounterControl" onClick={() => props.add(1)} />
        </div>
    );
}

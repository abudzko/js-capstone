export default function Counter(props) {
    return (
        <>
            <div className="counter">
                <input type="button" value={"-"} className="counterControl leftControl" onClick={() => props.add(-1)} />
                <p className="counterText">{props.count}</p>
                <input type="button" value={"+"} className="counterControl rightControl" onClick={() => props.add(1)} />
            </div>
            <div>
                <input type="button" value={"reset"} className="counterReset" onClick={() => props.reset()} />
            </div>
        </>
    );
}

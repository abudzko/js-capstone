export default function Counter(props) {
    const count = props.count;
    return (
        <>
            <div className="counter">
                <input type="button" value={"-"} aria-label="On Click" className="counterControl leftControl" onClick={() => props.updateValue(count - 1)} />
                <p className="counterText">{count}</p>
                <input type="button" value={"+"} aria-label="On Click" className="counterControl rightControl" onClick={() => props.updateValue(count + 1)} />
            </div>
            <div>
                <input type="button" aria-label="On Click" value={"reset"} className="counterReset" onClick={() => props.reset()} />
            </div>
        </>
    );
}

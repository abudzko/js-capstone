import { formatDate } from "const";

export default function DateTimePicker(props) {
    const date = props.date;

    function changeDate(dateType, value) {
        const newDate = new Date(date)
        if (dateType === 'day') {
            newDate.setDate(date.getDate() + value);
        } else if (dateType === 'hour') {
            newDate.setHours(date.getHours() + value);
        } else if (dateType === 'minute') {
            newDate.setMinutes(date.getMinutes() + value);
        }
        props.updateDate(newDate);
    }

    return (
        <>
            <h2>{formatDate(date)}</h2>
            <span>Days</span>
            <div className="dateTimePicker">
                <input type="button" value={"-"} aria-label="On Click" className="dateTimePickerControl leftControl" onClick={() => changeDate("day", -1)} />
                <p className="dateTimePickerText">{date.getDate()}</p>
                <input type="button" value={"+"} aria-label="On Click" className="dateTimePickerControl rightControl" onClick={() => changeDate("day", 1)} />
            </div>
            <span>Hours</span>
            <div className="dateTimePicker">
                <input type="button" value={"-"} aria-label="On Click" className="dateTimePickerControl leftControl" onClick={() => changeDate("hour", -1)} />
                <p className="dateTimePickerText">{date.getHours()}</p>
                <input type="button" value={"+"} aria-label="On Click" className="dateTimePickerControl rightControl" onClick={() => changeDate("hour", 1)} />
            </div>
            <span>Minutes</span>
            <div className="dateTimePicker">
                <input type="button" value={"-"} aria-label="On Click" className="dateTimePickerControl leftControl" onClick={() => changeDate("minute", -1)} />
                <p className="dateTimePickerText">{date.getMinutes()}</p>
                <input type="button" value={"+"} aria-label="On Click" className="dateTimePickerControl rightControl" onClick={() => changeDate("minute", 1)} />
            </div>
            <div>
                <input type="button" value={"reset"} aria-label="On Click" className="dateTimePickerReset" onClick={() => props.updateDate(new Date())} />
            </div>
        </>
    );
}

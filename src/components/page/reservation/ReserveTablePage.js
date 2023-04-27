import ShortSiteInfo from "components/ShortSiteInfo";
import { BACK_TO_HOME_TEXT } from "const";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Counter from "./Counter";

export default function ReserveTablePage(props) {
    const location = useLocation();
    const state = location.state;
    const [guestNumber, setGuestNumber] = useState(state ? state.guestNumber : 1);
    const [reservationDateTime, setReservationDateTime] = useState(
        state
            ? state.reservationDateTime :
            new Date().toISOString().substring(0, 16)
    );
    let updatedState = { ...state, guestNumber, reservationDateTime };

    return (
        <>
            <article>
                <div className="reserveTablePage">
                    <ShortSiteInfo />
                    <h1>Step 1/3</h1>
                    <h1>Reserve a table.</h1>
                    <div className="reserveTablePage1Form">
                        <form>
                            <div>
                                <label htmlFor="datetime">Date and Time</label>
                                <br />
                                <input
                                    type="datetime-local" id="datetime" name="datetime"
                                    defaultValue={reservationDateTime}
                                    onChange={(e) => setReservationDateTime(e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="guestNumber">Guest Number</label>
                                <br />
                                <Counter count={guestNumber} add={(v) => {
                                    if (v < 0 && guestNumber === 0) {
                                        return;
                                    }
                                    setGuestNumber(guestNumber + v);

                                }} />
                            </div>
                        </form>
                    </div>
                    <div>
                        <Link to="/" className="nav-item mainButton">{BACK_TO_HOME_TEXT}</Link>
                        <Link to="/reservation2" state={updatedState} className="nav-item mainButton">Next</Link>
                    </div>
                </div>
            </article>
        </>
    );
}

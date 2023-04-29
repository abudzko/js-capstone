import ShortSiteInfo from "components/ShortSiteInfo";
import { BACK_TO_HOME_TEXT } from "const";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Counter from "./Counter";
import DateTimePicker from "./DateTimePicker";

export default function ReserveTablePage(props) {
    const location = useLocation();
    const state = location.state;
    const [reservationDateTime, setReservationDateTime] = useState(state ? state.reservationDateTime : new Date());
    const [guestNumber, setGuestNumber] = useState(state ? state.guestNumber : 1);
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
                        <h2>Date and Time</h2>
                            <div>
                                <DateTimePicker
                                    date={reservationDateTime}
                                    updateDate={(value) => { setReservationDateTime(value); }} />
                            </div>
                            <h2>Guest Number</h2>
                            <div>
                                <label htmlFor="guestNumber">Guest Number</label>
                                <br />
                                <Counter
                                    count={guestNumber}
                                    add={(v) => {
                                        if (v < 0 && guestNumber === 0) {
                                            return;
                                        }
                                        setGuestNumber(guestNumber + v);
                                    }}
                                    reset={() => setGuestNumber(1)}
                                />
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

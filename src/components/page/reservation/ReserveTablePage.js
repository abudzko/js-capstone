import ShortSiteInfo from "components/ShortSiteInfo";
import { BACK_TO_HOME_TEXT } from "const";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Counter from "./Counter";
import DateTimePicker from "./DateTimePicker";
import { FormControl, FormErrorMessage } from "@chakra-ui/react";

export default function ReserveTablePage(props) {
    const location = useLocation();
    const state = location.state;
    const [reservationDateTime, setReservationDateTime] = useState(state ? state.reservationDateTime : new Date());
    const [guestNumber, setGuestNumber] = useState(state ? state.guestNumber : 1);
    let updatedState = { ...state, guestNumber, reservationDateTime };

    const [dateAndTimeError, setDateAndTimeError] = useState({});
    const [guestNumberError, setGuestNumberError] = useState({});

    return (
        <>
            <article>
                <div className="reserveTablePage">
                    <ShortSiteInfo />
                    <h1>Step 1/3</h1>
                    <h1>Reserve a table.</h1>
                    <div className="reserveTablePage1Form">
                        <form>
                            <FormControl isInvalid={dateAndTimeError.error}>
                                <h2>Date and Time</h2>
                                <div>
                                    <DateTimePicker
                                        id="dateTime"
                                        date={reservationDateTime}
                                        updateDate={(value) => {
                                            if (validate(value, validateReservationDate, dateAndTimeError, setDateAndTimeError)) {
                                                setReservationDateTime(value);
                                            }
                                        }
                                        } />
                                </div>
                                <FormErrorMessage>{dateAndTimeError.error}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={guestNumberError.error}>
                                <div>
                                    <h2>Guest Number</h2>
                                    <Counter
                                        id="counter"
                                        count={guestNumber}
                                        updateValue={(value) => {
                                            if (validate(value, validateGuestNumber, guestNumberError, setGuestNumberError)) {
                                                setGuestNumber(value);
                                            }
                                        }}
                                        reset={() => setGuestNumber(1)}
                                    />
                                    <FormErrorMessage>{guestNumberError.error}</FormErrorMessage>
                                </div>
                            </FormControl>
                        </form>
                    </div>
                    <div>
                        <Link to="/" className="nav-item mainButton" aria-label="On Click" >{BACK_TO_HOME_TEXT}</Link>
                        <Link to="/reservation2" state={updatedState} aria-label="On Click" className="nav-item mainButton">Next</Link>
                    </div>
                </div>
            </article>
        </>
    );
}

function validate(value, validateFn, errorState, setErrorFn) {
    const validation = validateFn(value);
    if (validation.error) {
        setErrorFn(validation);
        return false;
    }
    if (errorState.error) {
        setErrorFn({});
    }
    return true;
}

function validateReservationDate(date) {
    const now = new Date();
    let result = {};
    if (date.getTime() < now.getTime()) {
        result = { error: "Please select the date that is bigger than current one" };
    }
    const maxDays = 15;
    now.setDate(now.getDate() + maxDays);
    if (date.getTime() > now.getTime()) {
        return { error: `Unfortunately we provide reservation only for the next ${maxDays} days. Please select closer date` };
    }
    return result;
}

function validateGuestNumber(guestNumber) {
    let result = {};
    if (guestNumber < 1) {
        result = { error: "Atleast one guest should be selected" };
    }
    const maxGuests = 10;
    if (guestNumber > maxGuests) {
        return { error: `Unfortunately we can't serve reservation for more than ${maxGuests} persons` };
    }
    return result;
}

import ShortSiteInfo from "components/ShortSiteInfo";
import { BACK_TO_HOME_TEXT, formatDate } from "const";
import { Link, useLocation } from "react-router-dom";

export default function ReserveTablePage3(props) {
    const location = useLocation();
    const state = location.state;
    let updatedState = { ...state };

    return (
        <>
            <article>
                <div>
                    <ShortSiteInfo />
                    <h1> Step 3/3</h1>
                    <h1>Reserve a table.</h1>
                    <div className="reserveTablePage3Form">
                        <h1>Congratulations. Table was successfully reserved!</h1>
                        <h3>Dear <em>{state.firstName} {state.lastName}</em>,
                            You have reserved the table at <em>{formatDate(state.reservationDateTime)}</em> for the <em>{state.guestNumber}</em> guest{state.guestNumber > 1 ? "s" : ""}.</h3>
                        <h3>Our manager will contant you by phone number <em>{state.tel}</em> for more details.</h3>
                        {state.email && (<h3>Also have sent confirmation by your email <em>{state.email}</em>.</h3>)}
                    </div>
                </div>
                <div>
                    <Link to="/" state={updatedState} aria-label="On Click" className="nav-item mainButton">{BACK_TO_HOME_TEXT}</Link>
                </div>
            </article>
        </>
    );
}

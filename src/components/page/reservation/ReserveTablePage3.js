import ShortSiteInfo from "components/ShortSiteInfo";
import { BACK_TO_HOME_TEXT, formatDate } from "const";
import { Link, useLocation } from "react-router-dom";

export default function ReserveTablePage3(props) {
    console.log(props);
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
                        <h3>Dear {state.firstName} {state.lastName}, You have reserved the table at {formatDate(state.reservationDateTime)} for the {state.guestNumber} guest{state.guestNumber > 1 ? "s" : ""}.</h3>
                        <h3>We have sent confirmation by your email {state.email}.</h3>
                        <h3>Also our manager will contant you by phone number {state.tel} for more details.</h3>
                    </div>
                </div>
                <div>
                    <Link to="/" state={updatedState} className="nav-item mainButton">{BACK_TO_HOME_TEXT}</Link>
                </div>
            </article>
        </>
    );
}

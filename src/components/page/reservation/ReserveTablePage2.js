import ShortSiteInfo from "components/ShortSiteInfo";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function ReserveTablePage2(props) {
    const location = useLocation();
    const state = location.state;
    const [firstName, setFirstName] = useState(state ? state.firstName : "");
    const [lastName, setLastName] = useState(state ? state.lastName : "");
    const [tel, setTel] = useState(state ? state.tel : "");
    const [email, setEmail] = useState(state ? state.email : "");
    let updatedState = { ...state, firstName, lastName, tel, email };

    return (
        <>
            <article>
                <div className="reserveTablePage">
                    <ShortSiteInfo />
                    <h1>Step 2/3</h1>
                    <h1>Reserve a table.</h1>
                    <div className="reserveTablePage2Form">
                        <form>
                            <div>
                                <label htmlFor="firstName">First Name</label>
                                <br />
                                <input type="text" id="firstName" name="firstName" placeholder="Your First Name"
                                    defaultValue={firstName}
                                    onChange={(e) => setFirstName(e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="lastName">Last Name</label>
                                <br />
                                <input type="text" id="lastName" name="lastName" placeholder="Your Last Name"
                                    defaultValue={lastName}
                                    onChange={(e) => setLastName(e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="tel">Phone Number</label>
                                <br />
                                <input type="tel" id="tel" name="tel" placeholder="+123456789876" pattern="[+]{1}[0-9]{11,14}"
                                    defaultValue={tel}
                                    onChange={(e) => setTel(e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <br />
                                <input type="email" id="email" name="email" placeholder="You email"
                                    defaultValue={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                            </div>
                        </form>
                    </div>
                    <div>
                        <Link to="/reservation" state={updatedState} className="nav-item mainButton">Back</Link>
                        <Link to="/reservation3" state={updatedState} className="nav-item mainButton">Reserve</Link>
                    </div>
                </div>
            </article>
        </>
    );
}

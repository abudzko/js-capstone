import ShortSiteInfo from "components/ShortSiteInfo";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useLocation, useNavigate } from "react-router-dom";
import { Button, FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react";

export default function ReserveTablePage2(props) {
    const location = useLocation();
    const state = location.state;
    const firstName = state && state.firstName ? state.firstName : "";
    const lastName = state && state.lastName ? state.lastName : "";
    const tel = state && state.tel ? state.tel : "";
    const email = state && state.email ? state.email : "";

    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            firstName: firstName,
            lastName: lastName,
            tel: tel,
            email: email,
        },
        onSubmit: (values) => {
            navigate('/reservation3', { state: { ...state, ...values } });
        },
        validationSchema: Yup.object(
            {
                firstName: Yup.string().required("Required"),
                lastName: Yup.string().optional("Required"),
                tel: Yup.string().required("Required").matches(/^[+]{1}[0-9]{11,14}$/, "Please check you phone number. See example: +12345678912"),
                email: Yup.string().required("Required").email("Please check you email. See example: mail@mail.com"),
            }
        ),
    });

    const handleBack = event => {
        event.preventDefault();
        navigate('/reservation', { state: { ...state, ...formik.values } });
    };

    return (
        <>
            <article>
                <div className="reserveTablePage">
                    <ShortSiteInfo />
                    <h1>Step 2/3</h1>
                    <h1>Reserve a table.</h1>
                    <div className="reserveTablePage2Form">
                        <form onSubmit={formik.handleSubmit}>
                            <FormControl isInvalid={formik.errors.firstName && formik.touched.firstName}>
                                <FormLabel htmlFor="firstName">First Name*</FormLabel>
                                <Input id="firstName" name="firstName" placeholder="Your First Name"
                                    {...formik.getFieldProps('firstName')}
                                />
                                <FormErrorMessage >{formik.errors.firstName}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={formik.errors.lastName && formik.touched.lastName}>
                                <FormLabel htmlFor="lastName">Last Name</FormLabel>
                                <Input id="lastName" name="lastName"
                                    placeholder="Your Last Name"
                                    {...formik.getFieldProps('lastName')}
                                />
                                <FormErrorMessage>{formik.errors.lastName}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={formik.errors.tel && formik.touched.tel}>
                                <FormLabel htmlFor="tel">Phone Number*</FormLabel>
                                <Input id="tel" name="tel"
                                    placeholder="+12345678912"
                                    {...formik.getFieldProps('tel')}
                                />
                                <FormErrorMessage>{formik.errors.tel}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={formik.errors.email && formik.touched.email}>
                                <FormLabel htmlFor="email">Email</FormLabel>
                                <Input id="email" name="email"
                                    placeholder="You email"
                                    {...formik.getFieldProps('email')}
                                />
                                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                            </FormControl>
                            <button className="mainButton" aria-label="On Click" onClick={handleBack}>Back</button>
                            <button type="submit" aria-label="On Click" className="mainButton">Reserve</button>
                        </form>
                    </div>
                </div>
            </article>
        </>
    );
}

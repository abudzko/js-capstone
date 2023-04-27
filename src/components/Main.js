import { Routes, Route } from "react-router-dom";
import HomePage from "./page/home/HomePage";
import ReserveTablePage from "components/page/reservation/ReserveTablePage";
import ReserveTablePage2 from "./page/reservation/ReserveTablePage2";
import ReserveTablePage3 from "./page/reservation/ReserveTablePage3";

export default function Main(props) {
    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/about" element={<HomePage />}></Route>
                <Route path="/menu" element={<HomePage />}></Route>
                <Route path="/reservation" element={<ReserveTablePage />}></Route>
                <Route path="/reservation2" element={<ReserveTablePage2 />}></Route>
                <Route path="/reservation3" element={<ReserveTablePage3 />}></Route>
                <Route path="/order-online" element={<HomePage />}></Route>
                <Route path="/login" element={<HomePage />}></Route>
            </Routes>
        </main>
    );
}

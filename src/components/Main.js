import { Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import ReserveTablePage from "./page/ReserveTablePage";

export default function Main(props) {
    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/about" element={<HomePage />}></Route>
                <Route path="/menu" element={<HomePage />}></Route>
                <Route path="/reservation" element={<ReserveTablePage />}></Route>
                <Route path="/order-online" element={<HomePage />}></Route>
                <Route path="/login" element={<HomePage />}></Route>
            </Routes>
        </main>
    );
}

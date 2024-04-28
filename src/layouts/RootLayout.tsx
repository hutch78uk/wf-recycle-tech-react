import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import { Outlet } from "react-router-dom";

function RootLayout() {
    return (
        <div>
            <div><Header /></div>
            <main>
                <Outlet />
            </main>
            <div><Footer /></div>
        </div>
    )
}

export default RootLayout;
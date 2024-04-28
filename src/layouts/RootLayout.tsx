import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import { Outlet } from "react-router-dom";

function RootLayout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default RootLayout;
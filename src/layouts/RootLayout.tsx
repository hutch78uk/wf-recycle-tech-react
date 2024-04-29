import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import { Outlet } from "react-router-dom";

function RootLayout() {
    const navItems = [
        { name: 'Home', path: '/', topnav: true },
        { name: 'WF System', path: 'wf-system', topnav: true },
        { name: 'Sustainability', path: 'sustainability', topnav: true },
        { name: 'Our Value', path: 'our-value', topnav: true },
        { name: 'About Us', path: 'about-us', topnav: true },
        { name: 'News', path: 'news', topnav: true },
        { name: 'Contact Us', path: 'contact-us', topnav: true },
        { name: 'Privacy Policy', path: 'privacy', topnav: false },
        { name: 'Terms of Use', path: 'terms', topnav: false }
    ];

    return (
        <>
            <Header navItems={navItems} />
            <main>
                <Outlet />
            </main>
            <Footer navItems={navItems} />
        </>
    )
}

export default RootLayout;
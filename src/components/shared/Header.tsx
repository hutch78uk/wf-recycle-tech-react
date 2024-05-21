import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import wfLogo from "../../assets/images/logo-wfrt-green-lg.jpg";

// Define the type for the navItems prop
type NavItem = {
    name: string;
    path: string;
    topnav: boolean;
}
// Define the type for the props object received by the Footer component
type HeaderProps = {
    navItems: NavItem[];
}

const Header: React.FC<HeaderProps> = ({ navItems }) => {
    return (
        <>
            <header className="sm:text-center relative">
                <div className="w-full border-b border-wfGreenLight">
                    <div className="mx-auto w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-[1200px]">
                        <Link to="/"><img src={wfLogo} className="inline-block max-w-[220px] ml-5 sm:ml-0 sm:max-w-[300px] md:max-w-lg w-full mt-5 mb-5 md:mb-8" alt="WF Recycle-Techtest" /></Link>
                        <Navigation navItems={navItems.filter((navItems) => navItems.topnav)} />
                    </div>
                </div>
            </header>
        </>
    ); 
}

export default Header;
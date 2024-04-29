import wfLogoFooter from "../../assets/images/logo-wfrt-white-2.png";
import { Link, NavLink } from "react-router-dom";

// Define the type for the navItems prop
type NavItem = {
    name: string;
    path: string;
}
// Define the type for the props object received by the Footer component
type FooterProps = {
    navItems: NavItem[];
}

const getYear = () => {
    return new Date().getFullYear();
}

const Footer: React.FC<FooterProps> = ({ navItems }) => {
    return (
        <>
            <footer className="bg-gradient-to-t from-gradientDarkGreen to-gradientLightGreen from-60% text-center text-sm pt-[30px] pb-10 px-4 mt-28 text-white">
                <div className="mx-auto w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-[1200px] px-4">
                        
                        <ul className="mt-2.5 md:mt-0 md:flex md:justify-between text-center">
                            {navItems.map((item, index) => (
                                <li key={index} className="my-2.5">
                                    <NavLink className={'relative hover:underline'} to={item.path}>{item.name}</NavLink>
                                </li>
                            ))}
                        </ul>
                        <p className="py-6">
                            Copyright &copy; WF Recycle-Tech {getYear()}
                        </p>
                        <div className="mt-1 mb-4">
                            <Link to="/"><img src={wfLogoFooter} alt="WF Recycle-Tech" className="max-w-full h-auto inline-block" /></Link>
                        </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
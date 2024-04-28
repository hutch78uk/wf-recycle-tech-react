import wfLogoFooter from "../../assets/images/logo-wfrt-white-2.png";
import { Link, NavLink } from "react-router-dom";

const navItems = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'WF System',
        path: 'wf-system'
    },
    {
        name: 'Sustainability',
        path: 'sustainability'
    },
    {
        name: 'Our Value',
        path: 'our-value'
    },
    {
        name: 'About Us',
        path: 'about-us'
    },
    {
        name: 'News',
        path: 'news'
    },
    {
        name: 'Contact Us',
        path: 'contact-us'
    }
];

const getYear = () => {
    return new Date().getFullYear();
}

function Footer() {
    return (
        <>
            <footer className="bg-gradient-to-t from-gradientDarkGreen from-60% to-gradientLightGreen text-center text-sm pt-[30px] pb-10 mt-28 text-white">
                <div className="mx-auto w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-[1200px]">
                        <ul className="mt-2.5 md:mt-0 md:flex md:justify-between text-center">
                            {navItems.map(navItem => <li key={navItem.name} className="my-2.5">
                                <NavLink className={'relative hover:underline'} to={navItem.path}>{navItem.name}</NavLink></li>)}
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
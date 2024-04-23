import { NavLink } from "react-router-dom";

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
]

function Navigation() {
    return (
        <>
            {/* <h2>Navigation</h2>
            <NavLink to="/">Home</NavLink>
            <NavLink to="wf-system">WF System</NavLink> */}
            <ul>
                {navItems.map(navItem => <li key={navItem.name}><NavLink to={navItem.path}>{navItem.name}</NavLink></li>)}
            </ul>
        </>
    );
}

export default Navigation;
import { NavLink } from "react-router-dom";
import { useState } from "react";

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

function Navigation() {
    let [open,setOpen]=useState(false);

    return (
        <>
            <label className="flex items-center cursor-pointer h-full absolute right-0 top-0 mr-5 md:hidden">
                <span className={open ? 'closeBtn':'navburger'} onClick={()=>setOpen(!open)}></span>
            </label>
            <div className={`absolute md:relative w-full overflow-hidden z-[1] 
                md:h-auto transition-height duration-300 ease-in ${open ? 'h-[337px]':'h-0'}`}>
                <nav className={`w-full mt-px md:mt-0 bg-grayLight md:bg-white 
                    shadow-[0_5px_5px_rgba(0,0,0,0.1)] md:shadow-none absolute md:relative 
                    transition-all duration-300 ease-in md:top-0 ${open ? 'top-0':'top-[-380px]'}`}>
                    <ul className="mt-2.5 md:mt-0 md:flex md:justify-between text-center">
                        {navItems.map(navItem => <li key={navItem.name} className=
                        "mb-2.5 md:mb-0 pb-2.5 border-b border-white last-of-type:border-none text-gray666 hover:text-wfGreenLight">
                            <NavLink onClick={()=>setOpen(!open)} className={'relative opacity-100'} to={navItem.path}>{navItem.name}</NavLink></li>)}
                    </ul>
                </nav>
            </div>
            
            
        </>
    );
}

export default Navigation;
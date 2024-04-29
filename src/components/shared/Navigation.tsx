import { NavLink } from "react-router-dom";
import { useState } from "react";

// Define the type for the navItems prop
type NavItem = {
    name: string;
    path: string;
}
// Define the type for the props object received by the Footer component
type NavProps = {
    navItems: NavItem[];
}

const Navigation: React.FC<NavProps> = ({ navItems }) => {
    let [open,setOpen]=useState(false);

    return (
        <>
            <label className="flex items-center cursor-pointer h-full absolute right-0 top-0 mr-5 md:hidden">
                <span className={open ? 'closeBtn':'navburger'} onClick={()=>setOpen(!open)}></span>
            </label>
            <div className={`absolute md:relative w-full overflow-hidden z-[1] 
                md:h-auto transition-height duration-500 ease-in ${open ? 'h-[337px]':'h-0'}`}>
                <nav className={`w-full mt-px md:mt-0 bg-grayLight md:bg-white 
                    shadow-[0_5px_5px_rgba(0,0,0,0.1)] md:shadow-none absolute md:relative 
                    transition-all duration-500 ease-in md:top-0 ${open ? 'top-0':'top-[-380px]'}`}>
                    <ul className="mt-2.5 md:mt-0 md:flex md:justify-between text-center">
                        {navItems.map((item, index) => (
                            <li key={index} className=
                            "mb-2.5 last-of-type:mb-0 md:mb-0 pb-2.5 border-b border-white last-of-type:border-none text-gray666 hover:text-wfGreenLight">
                                <NavLink onClick={()=>setOpen(!open)} className={'relative opacity-100'} to={item.path}>{item.name}</NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            
            
            
            
            
        </>
    );
}

export default Navigation;
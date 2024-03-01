import style from './Logo_Navbar.module.css';
import {NavLinks} from './NavLinks';
import {RiMenu3Line} from '@react-icons/all-files/ri/RiMenu3Line';
import {CgClose} from '@react-icons/all-files/cg/CgClose';
import {useState} from 'react';

const MobileNavigation = () => {
    const [open, setOpen] = useState(false);
    const hamburgerIcon = <RiMenu3Line className={style.Hamburger} onClick={() => setOpen(!open)}/>
    const closeIcon = <CgClose className={style.Hamburger} onClick={() => setOpen(!open)}/>
    const closeMobileMenu = () => setOpen(false);
    return (
        <nav className={style.Mobile}>
            {
                open ? closeIcon : hamburgerIcon
            }  
            {
                open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu}/>
            }
        </nav>
    );
}

export default MobileNavigation;
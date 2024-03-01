import style from './Logo_Navbar.module.css';
import MobileNavigation from './MobileNavigation';
import DesktopNavigation from './DesktopNavigation';

// ***** Logo Content *****
export const Logo = () => {
    return (
        <a href="/#" className={style.Logo}>
            <span>&lt;</span>Amit Jaggi<span>&#47;&gt;</span>
        </a>
    );
}

// ***** Navigation-Bar Content *****
export const NavBar = () => {
    return (
        <div className={style.NavBar}>
            {/* <a href="/#">Home</a>
            <a href="/#about">About</a>
            <a href="/#portfolio">Portfolio</a>
            <a href="/#resume">Resume</a>
            <a href="/#contact">Contact</a> */}
            <DesktopNavigation />
            <MobileNavigation />
        </div>
    );
}
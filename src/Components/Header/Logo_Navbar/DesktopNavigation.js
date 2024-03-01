import style from './Logo_Navbar.module.css';
import {NavLinks} from './NavLinks'

const DesktopNavigation = () => {
    return (
        <nav className={style.Desktop}>
            <NavLinks />
        </nav>
    );
}

export default DesktopNavigation;
import style from './Header.module.css';
import {Logo, NavBar} from './Logo_Navbar/Logo_Navbar';

const Header = () => {
    return (
        <div className={style.HeaderContainer}>
            <div className={style.LogoNavbarContainer}>
                <Logo />
                <NavBar />
            </div>
        </div>
    )
}
export default Header;
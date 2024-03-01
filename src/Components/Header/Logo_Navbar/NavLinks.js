import style from './Logo_Navbar.module.css';
import {motion} from 'framer-motion';

export const NavLinks = ({isMobile, closeMobileMenu}) => {
    const animateFrom = {opacity: 0, y: -40}
    const animateTo = {opacity: 1, y: 0}
    return (
        <div className={style.linkBox}>
            <motion.a href="/#" onClick={() => isMobile && closeMobileMenu()} initial={animateFrom} animate={animateTo} transition={{delay: 0.05}}>Home</motion.a>
            <motion.a href="/#about" onClick={() => isMobile && closeMobileMenu()} initial={animateFrom} animate={animateTo} transition={{delay: 0.10}}>About</motion.a>
            <motion.a href="/#portfolio" onClick={() => isMobile && closeMobileMenu()} initial={animateFrom} animate={animateTo} transition={{delay: 0.20}}>Portfolio</motion.a>
            <motion.a href="/#resume" onClick={() => isMobile && closeMobileMenu()} initial={animateFrom} animate={animateTo} transition={{delay: 0.30}}>Resume</motion.a>
            <motion.a href="/#contact" onClick={() => isMobile && closeMobileMenu()} initial={animateFrom} animate={animateTo} transition={{delay: 0.40}}>Contact</motion.a>
        </div>
    );
}
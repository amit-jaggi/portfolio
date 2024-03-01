import style from './NeonButton.module.css';
import Resume from '../../../assets/Resume.pdf';
import { motion } from 'framer-motion';

export const ContactBtn = ({ content }) => {
    const animateFrom = { opacity: 0, y: -40 }
    const animateTo = { opacity: 1, y: 0 }
    // return <a href="/#" className={`${style.Neon} ${style.contact}`}>{content}</a>
    return <motion.a
        className={`${style.Neon} ${style.contact}`}
        href="/#contact"
        // onClick={() => isMobile && closeMobileMe()}
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.40 }}
    >{content}</motion.a>
}

export const DownloadBtn = ({ content }) => {
    return <a href={Resume} className={`${style.Neon} ${style.download}`} download="Amit Jaggi.pdf">{content}</a>
}

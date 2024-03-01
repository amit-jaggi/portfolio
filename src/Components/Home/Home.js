import style from './Home.module.css';
import wave from '../../image/wave.png';
import binaryWorld from '../../image/binaryWorld.svg';
import {ContactBtn, DownloadBtn} from './NeonButton/NeonButton'

const Home = () => {
    return (
        <div className={style.HomeContainer} id="home">
            <div className={style.Home}>
                <div className={style.Content}>
                    <h1>Hi, I am <span>Amit Jaggi</span>
                        <br/>
                        React Developer
                    </h1>
                    <p>Transform your ideas into reality</p>
                </div>
                <span className={style.neonBtn}>
                    <ContactBtn content="Hire Me" />
                    <DownloadBtn content="Download CV" />
                </span>
            </div>
            <img src={wave} alt="wave background" className={style.Wave} />
            <img src={binaryWorld} alt="formal pic" className={style.BinaryWorld} />
        </div>
    )
}

export default Home;
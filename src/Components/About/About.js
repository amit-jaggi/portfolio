import style from './About.module.css';
import profile3 from '../../image/profile3.png';
import Technology from './Technology/Technology';

const About = () => {
    return (
        <div className={style.About} id="about">
            <div className={style.AboutContainer}>
                <div className={style.Content}>
                    <h1>About</h1>
                    <p>A talented, motivated individual with strong communication skills, team spirit, and in-depth knowledge of languages and development tools, desires the position of Software Developer Engineer at a growth-oriented company, where I can use my skills to the advantage of the company while having the scope to developmy own skills.</p>
                </div>
                <div className={style.technology}>
                    <p>Languages/Library/Technology</p>
                    <div className={style.techLogo}>
                        <Technology />
                    </div>
                </div>
                <img src={profile3} alt="it's me" className={style.profile3} />
            </div>
        </div>
    );
}

export default About;
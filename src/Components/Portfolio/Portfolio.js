import style from './Portfolio.module.css';
import { useContext } from 'react';
import { MainDataBase } from '../DataBase/DataBase';
import Website from './Website/Website';

const Portfolio = () => {
    const [data] = useContext(MainDataBase)
    
    return (
        <div className={style.PortfolioContainer} id="portfolio">
            <h1>Portfolio</h1>
            <div className={style.Portfolios}>
            {
                data.filter(
                    display => display.category === `Portfolio`
                ).map(
                    content => <Website key={content.id} content={content}/>
                )
            }
            </div>
        </div>
    );
}

export default Portfolio;
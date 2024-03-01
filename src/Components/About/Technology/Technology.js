import style from './Technology.module.css';
import { useContext } from 'react';
import { MainDataBase } from '../../DataBase/DataBase';

const Technology = () => {
    const [data] = useContext(MainDataBase)
    return (
        <>
            {
                data.filter(
                    display => display.category === `DevelopmentLanguage`
                ).map(
                    content => <img key={content.id} src={content.url} alt={content.url} className={style.logo}/>
                )
            }
        </>
    );
}

export default Technology;
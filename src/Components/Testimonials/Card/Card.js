import style from './Card.module.css';

export const Card = ({content}) => {
    const {personImage, personName, personOpinion} = content;
    return (
        <div className={style.Card}>
            <div className={style.imageName}>
                <div className={style.border1}>
                    <img src={personImage} alt={personName} className={style.image} />
                </div>
                <div className={style.name}>{personName}</div>
            </div>
            <div className={style.opinion}>{personOpinion}</div>
        </div>
    );
}
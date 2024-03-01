import style from './Timeline.module.css';

const Timeline = ({career}) => {
    const {careerRole, passingYear, institute} = career;

    return (
        <div className={style.timeline}>
            <p>{careerRole}</p>
            <span className={style.year}>{passingYear}</span>
            <p className={style.italic}>{institute}</p>
        </div>
    );
}

export default Timeline;
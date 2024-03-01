import style from './Website.module.css';

const handleURL = url => () => window.open(url, '_blank');

const Website = ({content}) => {
    return (
        <div className={style.site} onClick={handleURL(content.repositoryUrl)}>
            <img src={content.imageUrl} alt={content.title} className={style.webImage}/>
            <div className={`${style.overlay} ${style.overlayFade}`}>
                <p className={style.title}>{content.title}</p>
            </div>
        </div>
    );
}

export default Website;
import style from './Testimonials.module.css';
import { useContext } from 'react';
import { MainDataBase } from '../DataBase/DataBase';
import { Card } from './Card/Card';

const Testimonials = () => {
    const [data] = useContext(MainDataBase)
    return (
        <div className={style.TestimonialsContainer}>
            <h1>Testimonials</h1>
            <div className={style.sliderBox}>            
            {
                data.filter(
                    display => display.category === 'Testimonial'
                ).map(
                    content => <Card key={content.id} content={content}/>
                )
            }
            </div>
        </div>
    );
}

export default Testimonials;
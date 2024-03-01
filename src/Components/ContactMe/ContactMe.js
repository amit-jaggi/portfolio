import style from './ContactMe.module.css';
import Form from './Form/Form';
import {FiMail} from '@react-icons/all-files/fi/FiMail';
import {FiPhoneCall} from '@react-icons/all-files/fi/FiPhoneCall';
import {GrLocation} from '@react-icons/all-files/gr/GrLocation';

const ContactMe = () => {
    return (
        <div className={style.contactContainer} id="contact">
            <div className={style.contactBox}>
                <h1>Contact Me</h1>
                <div className={style.box}>
                    <div className={style.leftBox}>
                        <p className={style.heading}>Let's connect</p>
                        <p>Thank you for viewing over this portfolio. Please feel free to drop a line for any queries. I'll get intouch with you as soon as I can. That's promise... </p>
                        <div className={style.compact}>
                            <a href="mailto:amitjaggi.official@gmail.com">
                                <FiMail style={{marginRight: '6%', fontSize: '25px', color: 'black'}}/>amitjaggi.official@gmail.com
                            </a>
                            <p>
                                <FiPhoneCall style={{marginRight: '6%', fontSize: '25px', color: 'black'}}/>(+91) 84204 64731
                            </p>
                            <p>
                                <GrLocation style={{marginRight: '6%', fontSize: '25px', color: 'black'}}/>Electronic City Phase - 1, Bangalore, Karnataka, India
                            </p>
                        </div>
                    </div>
                    <div className={style.rightBox}>
                        <p className={style.heading}>Send me a message</p>
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactMe;
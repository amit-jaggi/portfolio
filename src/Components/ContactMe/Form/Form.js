import style from './Form.module.css';
import { useState } from 'react';

const Form = () => {
    const [data, setData] = useState([]);
    const [fullName, setFullName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const formSubmit = e => {
        e.preventDefault();
        if (fullName && number && email && message) {
            setData([...data, { fullName, number, email, message }]);
            setFullName('');
            setNumber('');
            setEmail('');
            setMessage('')
            alert(`Thank you ${fullName} for your response.`);
            console.log(`${fullName} | ${number} | ${email} | ${message}`)
        } else {
            alert('Field is required.\nYou have left a field empty and a value must be entered.')
        } 
        
    }


    return (
        <form action="#"
        onSubmit={formSubmit}>
            <div>
                <label htmlFor="name">First &amp; Last Name<span>*</span></label>
                <input type="text" name="name" value={fullName} onChange={e => setFullName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="name">Phone number<span>*</span></label>
                <input type="number" name="phoneNumber" value={number} onChange={e => setNumber(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="name">Email address<span>*</span></label>
                <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="name">Message<span>*</span></label>
                <textarea name="message" id="message" cols="30" rows="3" placeholder="Your message here.." value={message} onChange={e => setMessage(e.target.value)}></textarea>
            </div>
            <input type="submit" value="Send Messsage" className={style.submitBtn} />
        </form>
    );
}

export default Form;
import styles from './Contact.css';
import React, { useState } from 'react';
import { MdOutlineEmail } from 'react-icons/md';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        text: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission logic here, for example:
        console.log(formData); // Replace with your submission logic
        // Reset the form after submission if needed
        setFormData({
            name: '',
            email: '',
            text: ''
        });
    };

    const { name, email, text } = formData;

    return (
        <div>
                    <form className="email-form" onSubmit={handleSubmit}>
                        <input
                            name="name"
                            type="text"
                            className="feedback-input"
                            placeholder="Name"
                            value={name}
                            onChange={handleChange}
                        />
                        <input
                            name="email"
                            type="text"
                            className="feedback-input"
                            placeholder="Email"
                            value={email}
                            onChange={handleChange}
                        />
                        <textarea
                            name="text"
                            className="feedback-input"
                            placeholder="Comment"
                            value={text}
                            onChange={handleChange}
                        ></textarea>
                        <input className='submit' type="submit" value="SUBMIT" />
                    </form>
                </div>
    );
}

export default Contact
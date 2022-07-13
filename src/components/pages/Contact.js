import React, { useEffect, useState } from "react";
import emailjs from '@emailjs/browser';
import { validateEmail } from '../../utils/utils'

function Contact() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    useEffect(() => {
        setSuccess(false);
    }, [])

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;


        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const serviceId = process.env.REACT_APP_SERVICE_KEY;
    const publicKey = process.env.REACT_APP_API_KEY;
    
    const sendEmail = (e) => {
        e.preventDefault();

        
        if (!validateEmail(email)) {
            setErrorMessage('This email is not vaild!');
            return;
        }

        if (message === '') {
            setErrorMessage('Text not found');
            return;
        }

        let formValue = {
            name: name,
            email: email,
            message: message
        };

        emailjs.send(serviceId, 'template_pru9th7', formValue, publicKey)
            .then((result) => {
                console.log(result.text);
                setSuccess(true);
            }, (error) => {
                console.log(error.text);
            });
        setEmail('');
        setName('');
        setMessage('');
    };

    return (
        <div className="justify-center">
            <h2 className="font-bold text-slate-200 justify-center text-3xl flex flex-row mb-3 border-b pb-2">Contact Me</h2>
            <div>
                <form className="form my-2">
                    <label className="text-slate-200">Name</label><br />
                    <input className="my-2 p-2 w-full border-gray-300 focus:border-green-400 rounded-sm" value={name} onChange={handleInputChange} type="text" name="name" placeholder="Name" /><br />
                    <label className="text-slate-200">Email</label><br />
                    <input className="p-2 my-2 w-full border-gray-300 focus:border-green-400 rounded-sm" value={email} onChange={handleInputChange} type="email" name="email" placeholder="something@email.com" /><br />
                    {errorMessage && (
                        <div>
                            <p className="p-2 error-text rounded bg-red-200">{errorMessage}</p>
                        </div>
                    )}
                    <label className="text-slate-200">Message</label><br />
                    
                    <textarea className="w-full h-32 my-2 p-2 border-2 border-gray-300 rounded-sm outline-none focus:border-green-400" value={message} onChange={handleInputChange} name="message" placeholder="Your message here" /><br />
                    <button type="button" className="text-slate-100 p-2 rounded bg-gray-800 hover:text-gray-400 mb-2" onClick={sendEmail}>
                        Submit
                    </button>
                    
                    <div className={`bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative ${success === true ? 'flex' : 'hidden'}`} role="alert">
                        <strong className="font-bold">Success&nbsp;</strong>
                        <span className="block sm:inline">Your email has been sent</span>
                        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                            <svg onClick={() => setSuccess(false)} className="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
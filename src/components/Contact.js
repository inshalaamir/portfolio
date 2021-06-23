import React from 'react'
import emailjs from "emailjs-com"
import { Link } from 'react-router-dom';


const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nczlp1s', 'template_v9t20si', e.target, 'user_G3SihIxncFZRiuJk7shTO')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
}

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact__wrapper">

                <h1>Contact me</h1>
                <h6>Have a project? Let me know and I'll get back to you as soon as possible!</h6>
                <div className="container">
                <form className="contact__form" onSubmit={sendEmail}>
                    <div className="form__wrapper">
                        <div className="form__creds">
                            <input class="contact__input" type="text" placeholder="Name" name="name"/>
                            <input class="contact__input" type="email" placeholder="Email" name="email"/>
                            
                            <input class="contact__input" type="text" placeholder="Subject" name="subject"/>

                        </div>

                        <div className="form__message">
                        <textarea class="contact__input contact__text" rows="3" placeholder="Briefly explain your project" name="message"></textarea>
                        </div>
                    </div>

                    <div class="d-grid gap-2 col-6 mx-auto mt-4">
                        <button class="btn btn-outline-danger" type="submit">Send</button>
                    </div>
                </form>

                <div className="contact__or">
                    <h5>OR</h5>
                    <div class="d-grid gap-2 col-6 mx-auto mt-4">
                        <a class="btn btn-success" href="https://www.upwork.com/freelancers/~0160def1ca0bf4d37d" >Contact me on Upwork</a>
                    </div>
                </div>

                </div>
                
            </div>
        </div>
    )
}

export default Contact

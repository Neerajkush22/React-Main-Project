import React from 'react'
import { useHistory } from 'react-router-dom';

import './Contact.css'
const ContactForm = () => {
  const history = useHistory();

  function onSubmitHandler(e) {
    e.preventDefault();
    history.push("/")
  }
  return (
    <div className="contact">
      <div
        className="leftSide"
      >

      </div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form className="contact-form" onSubmit={onSubmitHandler}>
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter your name..." type="text" />
          <label htmlFor="email">E-mail</label>
          <input name="email" placeholder="Enter your Email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            placeholder="Write your message..."
            rows="6"
            required
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}
export default ContactForm
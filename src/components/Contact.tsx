import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import '../app/styles/contact.css';

const Contact = () => {
  // State variables for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted", { name, email, message });
  };

  return (
    <div id="contact" className="contact-container">
      <div className="contact-grid md:grid-cols-2">
        
        <div className="contact-space">
          <h2 className="contact-heading" data-aos="zoom-in-up">
            Get in touch
          </h2>
          <p className="contact-text" data-aos="zoom-in-up">
            Drop me a line, give me a call or send me a message by submitting the form.
          </p>

          <div className="contact-flex" data-aos="zoom-in-up">
            <AiOutlineMail size={30} /> xyz&#64;gmail.com
          </div>
          <div className="contact-flex" data-aos="zoom-in-up">
            <BsTelephone size={30} /> (021) 000-0000
          </div>
        </div>

        <div className="contact-space">
          <form onSubmit={handleSubmit} data-aos="zoom-in-up">
            <div className="form">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                className="input-field" 
                id="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
              />
            </div>
            <div className="form">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                className="input-field" 
                id="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
            </div>
            <div className="form">
              <label htmlFor="msg">Message</label>
              <textarea 
                className="textarea-field" 
                id="msg" 
                rows={8} 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
              />
            </div>

            <button className="button" data-aos="zoom-in-up" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

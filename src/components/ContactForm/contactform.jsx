import emailjs from "emailjs-com";
import styles from "./contactform.module.css";
import { useState } from "react";

const ContactForm = ({ onClose }) => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      emailjs.send("service_qnz7k57", "template_aerenph", formData, "15ep1DkIEiTmJ3nFA")
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Message sent successfully!');
          onClose(); // Close the form after submission
        })
        .catch((err) => {
          console.error('FAILED...', err);
          alert('Failed to send the message, please try again.');
        });
    };
  
    return (
      <div className={styles.form_overlay}>
        <div className={styles.form_container}>
          {/* <button className={styles.close_button} onClick={onClose}>X</button> */}
          <h2>Contact Me</h2>
          <form onSubmit={handleSubmit} className={styles.forms}>
            <div className={styles.form_group}>
              <label>Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className={styles.form_group}>
              <label>Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className={styles.form_group}>
              <label>Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    );
  };

export default ContactForm;
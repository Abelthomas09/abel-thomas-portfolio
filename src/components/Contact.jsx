import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './Contact.css';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');
  const [feedback, setFeedback] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('sending');
    setFeedback('');

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setStatus('error');
      setFeedback('EMAIL SERVICE IS NOT CONFIGURED YET.');
      return;
    }

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      from_name: formData.name,
      from_email: formData.email,
      reply_to: formData.email
    };

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: templateParams
        })
      });

      if (!response.ok) {
        throw new Error('EmailJS request failed');
      }

      setStatus('success');
      setFeedback('MESSAGE SENT. I WILL GET BACK TO YOU SOON.');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch {
      setStatus('error');
      setFeedback('MESSAGE FAILED. PLEASE TRY AGAIN OR EMAIL ME DIRECTLY.');
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-header">
          <h2 className="big-cta">LET'S TALK</h2>
          <p className="contact-sub">Have an idea? Let's build something iconic.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-links">
             <a href="mailto:hello@abelthomas.dev" className="email-link">HELLO@ABELTHOMAS.DEV</a>
             <div className="social-list">
               <a href="https://www.linkedin.com/in/abel-thomas09" target="_blank" rel="noreferrer">LINKEDIN</a>
               <a href="https://github.com/Abelthomas09" target="_blank" rel="noreferrer">GITHUB</a>
               <a href="/Abel-Thomas-Resume.pdf" download>RESUME</a>
             </div>
          </div>

          <form className="minimal-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                name="name"
                placeholder="NAME"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="EMAIL"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <textarea
                name="message"
                placeholder="MESSAGE"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn" disabled={status === 'sending'}>
              {status === 'sending' ? 'SENDING...' : 'SEND MESSAGE'} <FaArrowRight />
            </button>
            {feedback && (
              <p className={`form-feedback ${status === 'error' ? 'is-error' : ''}`}>
                {feedback}
              </p>
            )}
          </form>
        </div>
        
        <div className="footer-credits">
           <span>© 2026 ABEL THOMAS</span>
           <span>EST. 2026</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;

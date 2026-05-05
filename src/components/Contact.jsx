import React, { memo, useEffect, useState } from 'react';
import { FaArrowRight, FaDownload, FaTimes } from 'react-icons/fa';
import './Contact.css';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const RESUME_URL = '/Abel-Thomas-Resume.pdf';

const Contact = () => {
  const [status, setStatus] = useState('idle');
  const [feedback, setFeedback] = useState('');
  const [isResumePreviewOpen, setIsResumePreviewOpen] = useState(false);

  useEffect(() => {
    if (!isResumePreviewOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsResumePreviewOpen(false);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isResumePreviewOpen]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const submission = new FormData(form);
    setStatus('sending');
    setFeedback('');

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setStatus('error');
      setFeedback('EMAIL SERVICE IS NOT CONFIGURED YET.');
      return;
    }

    const templateParams = {
      name: submission.get('name')?.toString().trim() ?? '',
      email: submission.get('email')?.toString().trim() ?? '',
      message: submission.get('message')?.toString().trim() ?? '',
      from_name: submission.get('name')?.toString().trim() ?? '',
      from_email: submission.get('email')?.toString().trim() ?? '',
      reply_to: submission.get('email')?.toString().trim() ?? ''
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
      form.reset();
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
               <button type="button" onClick={() => setIsResumePreviewOpen(true)}>RESUME</button>
             </div>
          </div>

          <form className="minimal-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                name="name"
                placeholder="NAME"
                required
              />
            </div>
            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="EMAIL"
                required
              />
            </div>
            <div className="input-group">
              <textarea
                name="message"
                placeholder="MESSAGE"
                rows="4"
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

      {isResumePreviewOpen && (
        <div
          className="resume-preview"
          role="dialog"
          aria-modal="true"
          aria-label="Resume preview"
        >
          <button
            type="button"
            className="resume-preview-backdrop"
            aria-label="Close resume preview"
            onClick={() => setIsResumePreviewOpen(false)}
          />
          <div className="resume-preview-panel">
            <div className="resume-preview-header">
              <h3>RESUME</h3>
              <div className="resume-preview-actions">
                <a href={RESUME_URL} download>
                  <FaDownload />
                  DOWNLOAD
                </a>
                <button
                  type="button"
                  aria-label="Close resume preview"
                  onClick={() => setIsResumePreviewOpen(false)}
                >
                  <FaTimes />
                </button>
              </div>
            </div>
            <div className="resume-preview-scroll" tabIndex="0">
              <iframe
                className="resume-frame"
                src={`${RESUME_URL}#toolbar=0&navpanes=0&view=FitH`}
                title="Abel Thomas Resume Preview"
                scrolling="no"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default memo(Contact);

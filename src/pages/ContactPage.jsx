import React from 'react';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <div className="page-contact" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '80px' // Offset fixed navbar
    }}>
      <div style={{width: '100%'}}>
        <Contact />
      </div>
    </div>
  );
};

export default ContactPage;

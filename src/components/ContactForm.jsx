import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (!email.trim()) {
      setError('Email is required');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    try {
      const response = await fetch('https://test.ezworks.ai/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.status === 422) {
        setError(data.message || 'Email domain not allowed');
      } else if (response.status === 200) {
        setSuccess(true);
        setEmail('');
      } else {
        setError('An error occurred. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="input-group">
        <input
          type="text"
          value={success ? 'Form Submitted' : email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          className={error ? 'error' : ''}
          disabled={success}
        />
        {error && <div className="error-message">{error}</div>}
      </div>
      <button type="submit" disabled={success}>Contact Me</button>
    </form>
  );
};

export default ContactForm; 
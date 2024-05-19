'use client';

import { useState } from 'react';
import Button from '../button/Button';
import styles from './contact.module.css';

const ContactForm = ({ className }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log('Email sent successfully');
    } else {
      console.error('Failed to send email');
    }
  };

  return (
    <form className={`${styles.card} ${styles.form}`} onSubmit={handleSubmit}>
      <label>
        <div className={styles.label}>Nom:</div>
        <input className={styles.input} type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        <div className={styles.label}>Courriel:</div>
        <input className={styles.input} type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <label>
        <div className={styles.label}>Message:</div>
        <textarea className={styles.input} name="message" value={formData.message} onChange={handleChange} rows="7"></textarea>
      </label>
      <Button className={styles.submit} type="submit">Envoyer</Button>
    </form>
  );
}
 

export default ContactForm;
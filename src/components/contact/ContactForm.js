'use client';

import { useState } from 'react';
import Button from '../button/Button';
import styles from './contact.module.css';

const ContactForm = ({ className }) => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ message: '', isLoading: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({
      message: '',
      isLoading: true,
    });

    const realFormData = new FormData(e.target);
    
    const formData = new FormData();
    for (var key in form) {
      formData.append(key, form[key]);
    }

    console.log('formData :>> ', formData);
    console.log('realFormData :>> ', realFormData);

    formData.append("access_key", "3748c8fc-84a7-40ad-ba77-cfd2e5b80f4c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      e.target.reset();
      setStatus({
        message: "Form Submitted Successfully",
        isLoading: false,
      });

    } else {
      console.log("Error", data);
      setStatus({
        message: data.message,
        isLoading: false,
      });
    }

    setForm({ name: '', email: '', message: '' });
  };

  return (
    <form className={`${styles.card} ${styles.form}`} onSubmit={handleSubmit}>
      <label>
        <div className={styles.label}>Nom:</div>
        <input className={styles.input} type="text" name="name" value={form.name} onChange={handleChange} />
      </label>
      <label>
        <div className={styles.label}>Courriel:</div>
        <input className={styles.input} type="email" name="email" value={form.email} onChange={handleChange} />
      </label>
      <label>
        <div className={styles.label}>Message:</div>
        <textarea className={styles.input} name="message" value={form.message} onChange={handleChange} rows="7"></textarea>
      </label>
      <Button className={styles.submit} type="submit">Envoyer</Button>
    </form>
  );
}


export default ContactForm;
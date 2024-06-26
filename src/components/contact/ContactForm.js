'use client';

import { useReducer, useState } from 'react';
import Button from '../button/Button';
import styles from './contact.module.css';
import { formActions, formInitialState, formReducer } from './contactFormReducer';

const ContactForm = ({ className }) => {
  const [form, dispatch] = useReducer(formReducer, formInitialState);
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: formActions.change,
      name, 
      value
    })
  };

  const handleClear = () => {
    dispatch({ type: formActions.clear });
  };

  async function sendEmail(formData) {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const result = await response.json();

    return result
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: formActions.submitRequest });

    const formData = new FormData();
    for (var key in form.data) {
      formData.append(key, form.data[key]);
    }

    formData.append("access_key", "3748c8fc-84a7-40ad-ba77-cfd2e5b80f4c");

    console.log('form :>> ', form);
    const result = await sendEmail(formData);

    if (result.success) {
      dispatch({ type: formActions.submitSuccess });
    } else {
      console.log("Error", result);
      dispatch({ type: formActions.submitFailure, status: result.message });
    }

    handleClear();
  };

  return (
    <form className={`${styles.card} ${styles.form}`} onSubmit={handleSubmit}>
      <label>
        <div className={styles.label}>Nom:</div>
        <input className={styles.input} type="text" name="name" value={form.data.name} onChange={handleChange} />
      </label>
      <label>
        <div className={styles.label}>Courriel:</div>
        <input className={styles.input} type="email" name="email" value={form.data.email} onChange={handleChange} />
      </label>
      <label>
        <div className={styles.label}>Message:</div>
        <textarea className={styles.input} name="message" value={form.data.message} onChange={handleChange} rows="7"></textarea>
      </label>
      <Button className={styles.submit} type="submit">Envoyer</Button>
    </form>
  );
}


export default ContactForm;
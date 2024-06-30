'use client';

import { useReducer, useState } from 'react';
import Button from '../../button/Button';
import styles from './contactForm.module.css';
import { formActions, formInitialState, formReducer } from './contactFormReducer';

const ContactForm = ({ className }) => {
  const [form, dispatch] = useReducer(formReducer, formInitialState);

  async function sendEmail(formData) {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const result = await response.json();

    return result
  }

  const validateInput = (input, value) => {
    switch (input) {
      case 'name':
        return {
          errorMessage: !value.trim() ? 'Ce champ est requis' : ''
        }

      case 'email':
        if (!value.trim()) return { errorMessage: 'Ce champ est requis' }
        
        const regex = /^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/;
        return {errorMessage: !regex.test(value) ? 'Courriel invalide' : ''}
        
      default:
        break;
    }
  }

  const validateForm = () => {
    let isValid = true
    for (let input in form.data) {
      const { errorMessage } = validateInput(input, form.data[input].value) || {};
      if (errorMessage) {
        isValid = false
        dispatch({ type: formActions.updateInputErrorMessage, input, errorMessage })
      }
    }
    if (!isValid) {
      return { errorMessage: 'Certaines informations ne sont pas valides.' }
    }
  }

  const handleBlur = (e) => {
    const { name: input } = e.target;
    
    // we only validate email onBlur (message is not required and required name is validated only on submit)
    if (input !== 'email') return
    if (!form.data[input].value) return

    const { errorMessage } = validateInput(input, form.data[input].value) || {};
    if (errorMessage) {
      dispatch({ type: formActions.updateInputErrorMessage, input, errorMessage })
    }
  }

  const handleChange = (e) => {
    const { name: input, value } = e.target;

    dispatch({
      type: formActions.updateInputValue,
      input,
      value,
    })
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const { errorMessage } = validateForm() || {};

    if (errorMessage) {
      dispatch({ type: formActions.submitFailure, status: errorMessage })
      return
    }

    dispatch({ type: formActions.submitRequest });

    if (!form.isValid) {
      dispatch({ type: formActions.submitFailure, status: "svp, veuillez corriger les erreurs ci-dessus" })
      return
    }

    const formData = new FormData();
    for (let input in form.data) {
      formData.append(input, form.data[input].value);
    }
    formData.append("access_key", "3748c8fc-84a7-40ad-ba77-cfd2e5b80f4c");

    const result = await sendEmail(formData);

    if (result.success) {
      dispatch({ type: formActions.submitSuccess, status: "Merci pour votre message, je vous recontacte dans les plus bref delais" });
    } else {
      console.error("Error from Web3Forms", result);
      dispatch({ type: formActions.submitFailure, status: "Oops, une erreur s'est produite... svp, envoyez votre message a william.lafortune@caissy@gmail.com" });
    }
  };

  return (
    <form className={`${styles.card} ${className}`} onSubmit={handleSubmit}>
      <label className={styles.group}>
        <div className={styles.label}>Nom :</div>
        <input className={`${styles.input} ${form.data.name.errorMessage ? styles.invalid : ''}`} type="text" name="name" value={form.data.name.value} onChange={handleChange} onBlur={handleBlur} />
        {form.data.name.errorMessage && <p className={styles.error}>{form.data.name.errorMessage}</p>}
      </label>
      <label className={styles.group}>
        <div className={styles.label}>Courriel :</div>
        <input className={`${styles.input} ${form.data.email.errorMessage ? styles.invalid : ''}`} type="text" name="email" value={form.data.email.value} onChange={handleChange} onBlur={handleBlur} />
        {form.data.email.errorMessage && <p className={styles.error}>{form.data.email.errorMessage}</p>}
      </label>
      <label className={styles.group}>
        <div className={styles.label}>Message :</div>
        <textarea className={`${styles.input} ${form.data.message.errorMessage ? styles.invalid : ''}`} name="message" value={form.data.message.value} onChange={handleChange} rows="7" onBlur={handleBlur}></textarea>
        {form.data.message.errorMessage && <p className={styles.error}>{form.data.message.errorMessage}</p>}
      </label>
      <Button className={styles.submit} type="submit">Envoyer</Button>
      {form.status && <p className={styles.status}>{form.status}</p>}
    </form>
  );
}


export default ContactForm;
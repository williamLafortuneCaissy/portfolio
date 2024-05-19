import { IconMail, IconPin, IconPhone, IconFacebook, IconLinkedin } from "../Icons";
import ContactForm from "./ContactForm";
import styles from './contact.module.css';

const Contact = () => {
    return ( 
        <section id="contact" className={styles.container}>
            <div className={styles.content}>
                <h2 className={styles.title}>Contactez-moi</h2>
                <p className={styles.text}>Batissez votre équipe de demain, un développeur à la fois</p>
                <div className={styles.socials}>
                    <a href="#" target="_blank" rel="noreferrer noopener"><IconFacebook className={styles.icon} /></a>
                    <a href="#" target="_blank" rel="noreferrer noopener"><IconLinkedin className={styles.icon} /></a>
                </div>
            </div>
            <ContactForm className={styles.form}/>
            <ul className={styles.contactList}> 
                <li className={styles.contactItem}>
                    <IconPhone className={styles.contactIcon} />
                    <a href="mailto:william.lafortune.caissy@gmail.com">william.lafortune.caissy@gmail.com</a>
                </li>
                <li className={styles.contactItem}>
                    <IconMail className={styles.contactIcon} />
                    <a href="tel:+15146212734">514 621-2734</a>
                </li>
                <li className={styles.contactItem}>
                    <IconPin className={styles.contactIcon} />
                    <a href="https://maps.app.goo.gl/Kkv52cwbeziEw9U97" target="_blank" rel="noreferrer noopener">Sainte-Sophie, QC J5J 2R4</a>
                </li>
            </ul>
        </section>
    );
}
 
export default Contact;
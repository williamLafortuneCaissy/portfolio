import { IconMail, IconPin, IconPhone, IconFacebook, IconLinkedin, Icongithub } from "../Icons";
import GridSpot from "../gridSpot/GridSpot";
import styles from './contact.module.css';

const Contact = () => {
    return ( 
        <section id="contact">
            <div className={`${styles.sticky} isolatedRelative`}>
                <GridSpot size="50vw 50vw" position="right" desktopOnly />
                <div className={styles.container}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>Contactez-moi</h2>
                        <p className={styles.text}>Batissez votre équipe de demain, un développeur à la fois</p>
                        <div className={styles.socials}>
                            <a className={styles.contactLink} href="https://www.facebook.com/william.lafortunecaissy" target="_blank" rel="noreferrer noopener"><IconFacebook className={styles.icon} /></a>
                            <a className={styles.contactLink} href="https://www.linkedin.com/in/william-lafortune-caissy-803800149/" target="_blank" rel="noreferrer noopener"><IconLinkedin className={styles.icon} /></a>
                            <a className={styles.contactLink} href="https://github.com/williamLafortuneCaissy" target="_blank" rel="noreferrer noopener"><Icongithub className={styles.icon} /></a>
                        </div>
                    </div>
                    {/* <ContactForm className={styles.form}/> */}
                    <ul className={styles.contactList}>
                        <li className={styles.contactItem}>
                            <IconPhone className={styles.contactIcon} />
                            <a className={styles.contactLink} href="mailto:william.lafortune.caissy@gmail.com">william.lafortune.caissy@gmail.com</a>
                        </li>
                        <li className={styles.contactItem}>
                            <IconMail className={styles.contactIcon} />
                            <a className={styles.contactLink} href="tel:+15146212734">514 621-2734</a>
                        </li>
                        <li className={styles.contactItem}>
                            <IconPin className={styles.contactIcon} />
                            <a className={styles.contactLink} href="https://maps.app.goo.gl/Kkv52cwbeziEw9U97" target="_blank" rel="noreferrer noopener">Sainte-Sophie, QC J5J 2R4</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
 
export default Contact;
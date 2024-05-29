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
                        <h2 className={styles.title}><span className="gradientText">Contactez-moi</span></h2>
                        <p className={styles.text}>Bâtissez votre équipe de demain, un développeur à la fois</p>
                        <div className={styles.socials}>
                            <a className={styles.socialLink} href="https://www.facebook.com/william.lafortunecaissy" target="_blank" rel="noreferrer noopener"><IconFacebook className={styles.icon} /></a>
                            <a className={styles.socialLink} href="https://www.linkedin.com/in/william-lafortune-caissy-803800149/" target="_blank" rel="noreferrer noopener"><IconLinkedin className={styles.icon} /></a>
                            <a className={styles.socialLink} href="https://github.com/williamLafortuneCaissy" target="_blank" rel="noreferrer noopener"><Icongithub className={styles.icon} /></a>
                        </div>
                    </div>
                    {/* <ContactForm className={styles.form}/> */}
                    <div className={styles.contactList}>
                        <a className={`${styles.contactLink} ${styles.contactItem}`} href="mailto:william.lafortune.caissy@gmail.com">
                            <IconPhone className={styles.contactIcon} />
                            <span>william.lafortune.caissy@gmail.com</span>
                        </a>
                        <a className={`${styles.contactLink} ${styles.contactItem}`} href="tel:+15146212734">
                            <IconMail className={styles.contactIcon} />
                            <span>514 621-2734</span>
                        </a>
                        <a className={`${styles.contactLink} ${styles.contactItem}`} href="https://maps.app.goo.gl/Kkv52cwbeziEw9U97" target="_blank" rel="noreferrer noopener">
                            <IconPin className={styles.contactIcon} />
                            <span>Sainte-Sophie, QC J5J 2R4</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
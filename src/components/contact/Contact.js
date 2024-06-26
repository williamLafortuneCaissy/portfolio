"use client"

import { IconMail, IconPin, IconPhone, IconFacebook, IconLinkedin, Icongithub } from "../Icons";
import GridSpot from "../gridSpot/GridSpot";
import styles from './contact.module.css';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import PlanetGraphic from "../planetGraphic/PlanetGraphic";
import { useTranslations } from "next-intl";
import ContactForm from "./ContactForm";

const Contact = () => {
    const contactRef = useRef();
    const graphicRef = useRef();

    gsap.registerPlugin(useGSAP, ScrollTrigger);

    const unpin = () => {
        gsap.set(contactRef.current, { position: 'static', bottom: 'auto', zIndex: 0 });
    }

    const pin = () => {
        gsap.set(contactRef.current, { position: 'sticky', bottom: 0, zIndex: -1 });
    }

    useGSAP(
        () => {
            // sticky contact needs gsap to prevent conflict with sticky hero + handles anchor cta
            ScrollTrigger.create({
                trigger: graphicRef.current,
                start: "top bottom",
                onEnter: self => { pin() },
                onLeaveBack: self => { unpin() },
                onEnterBack: self => {
                    pin()
                    self.refresh() // handles initial pageLoad scroll offset
                },
                onLeave: self => {
                    unpin()
                    self.refresh() // handles initial pageLoad scroll offset
                },


            });

        }, { scope: contactRef }
    );

    return (
        <>
            <div ref={graphicRef}>
                <PlanetGraphic inverted />
            </div>
            <footer id="contact" className={`isolatedRelative `} ref={contactRef}>
                <div className="isolatedRelative">
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
                        <ContactForm className={styles.form}/>
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
            </footer>
        </>
    );
}

export default Contact;
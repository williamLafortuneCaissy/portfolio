"use client"

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { IconFacebook, IconLinkedin, IconPin, Icongithub } from "../Icons";
import GridSpot from "../gridSpot/GridSpot";
import PlanetGraphic from "../planetGraphic/PlanetGraphic";
import styles from './contact.module.css';
import ContactForm from "./form/ContactForm";

const Contact = () => {
    const contactRef = useRef();
    const graphicRef = useRef();

    gsap.registerPlugin(useGSAP, ScrollTrigger);

    const unpin = () => {
        gsap.set(contactRef.current, { position: 'static', top: 'auto', zIndex: 0 });
    }

    // currently bugged on if contactRef's height is bigger than the 100vh
    const pin = () => {
        gsap.set(contactRef.current, { position: 'sticky', top: 0, zIndex: -1 });
    }

    useGSAP(
        () => {
            // sticky contact needs gsap to prevent conflict with sticky hero + handles anchor cta
            ScrollTrigger.create({
                trigger: graphicRef.current,
                start: "top bottom",
                onEnter: self => {  /* pin() */ },
                onLeaveBack: self => { unpin() },
                onEnterBack: self => {
                    // pin()
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
                    <GridSpot size="50vw 50vw" position="top left" desktopOnly />
                    <GridSpot size="50vw 50vw" position="bottom right" desktopOnly />
                    <div className={styles.container}>
                        <div className={styles.card}>
                            <div className={styles.content}>
                                <h2 className={styles.title}><span className="gradientText">Contactez-moi</span></h2>
                                <p className={styles.text}>Bâtissez votre équipe de demain, un développeur à la fois</p>
                            </div>
                            <ContactForm className={styles.form} />
                            <div className={styles.formFooter}>
                                <div className={styles.contactList}>
                                    <a className={`${styles.contactLink} ${styles.contactItem}`} href="https://maps.app.goo.gl/StfD7DerZz57CZgW8" target="_blank" rel="noreferrer noopener">
                                        <IconPin className={styles.contactIcon} />
                                        <span>Sainte-Sophie</span>
                                    </a>
                                </div>
                                <div className={styles.socials}>
                                    <a className={styles.socialLink} href="https://www.facebook.com/william.lafortunecaissy" target="_blank" rel="noreferrer noopener" aria-label="Profile Facebook"><IconFacebook className={styles.icon} /></a>
                                    <a className={styles.socialLink} href="https://www.linkedin.com/in/william-lafortune-caissy-803800149/" target="_blank" rel="noreferrer noopener" aria-label="Profile Linkedin"><IconLinkedin className={styles.icon} /></a>
                                    <a className={styles.socialLink} href="https://github.com/williamLafortuneCaissy" target="_blank" rel="noreferrer noopener" aria-label="Profile Github"><Icongithub className={styles.icon} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Contact;
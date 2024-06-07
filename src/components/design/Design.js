"use client"

import GridSpot from "../gridSpot/GridSpot";
import styles from "./design.module.css";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Design = () => {
    const designRef = useRef();


    gsap.registerPlugin(useGSAP, ScrollTrigger);

    useGSAP(
        () => {
            // note if we refactor later: these fadeIn trigger themselves
            const fadeElements = gsap.utils.toArray('.fadeIn')

            fadeElements.forEach((element) => {
                gsap.fromTo(
                    element,
                    { opacity: 0, y: -40 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1.5,
                        stagger: .1,
                        scrollTrigger: {
                            trigger: element,
                            start: 'top center',
                        },
                        ease: "power4.out",
                    },
                );
            });

        }, { scope: designRef }
    );

    return (
        <section className={`isolatedRelative`} ref={designRef}>
            <GridSpot size="40vw 40vw" position="top right" desktopOnly />
            <GridSpot size="40vw 40vw" position="bottom left" desktopOnly />
            <GridSpot squareMask size="100vw 20rem" position="top" mobileOnly />
            <div className={styles.container}>
                <h2 className={`${styles.title} fadeIn`} >Un pont entre <span className="gradientText">Design et Développement</span></h2>
                <div className={styles.grid}>
                    <div className={`${styles.content} fadeIn`}>
                        <h3 className={styles.contentTitle}>L’expert Front-end: un atout pour les designers</h3>
                        <p className={styles.text}>En tant que développeur Front-End ayant une bonne compréhention des principes de design, je suis apte à m’impliquer à l’élaboration des maquettes tout en respectant les contraintes techniques de la programmation.</p>
                    </div>
                    <svg className={styles.separator} viewBox="0 0 475 334" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="path-1-inside-1_176_418" fill="white">
                            <path d="M0 0H475V334H31C13.8792 334 0 320.121 0 303V0Z" />
                        </mask>
                        <path d="M0 0H475H0ZM475 335H31C13.3269 335 -1 320.673 -1 303H1C1 319.569 14.4315 333 31 333H475V335ZM31 335C13.3269 335 -1 320.673 -1 303V0H1V303C1 319.569 14.4315 333 31 333V335ZM475 0V334V0Z" fill="currentColor" mask="url(#path-1-inside-1_176_418)" vector-effect="non-scaling-stroke" />
                    </svg>

                    <div className={`${styles.content} fadeIn`}>
                        <h3 className={styles.contentTitle}>Un Développeur Orienté UX</h3>
                        <p className={styles.text}>Chaque demande client est minutieusement analysée et traitée tout en priorisant une expérience utilisateur optimale et en respectant le thème global du produit.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Design;
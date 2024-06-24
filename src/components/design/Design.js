"use client"

import { useRef } from "react";
import GridSpot from "../gridSpot/GridSpot";
import styles from "./design.module.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useMediaQuery from "@/utils/useMediaQuery";

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
                            start: 'top 70%',
                            toggleActions: 'restart pause resume reverse',
                        },
                        ease: "power4.out",
                    },
                );
            });

            const seperatorTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: '.seperator',
                    start: 'top 70%',
                    toggleActions: 'restart pause resume reverse',
                }
            });

            seperatorTimeline.to(
                '.seperator',
                {
                    '--clip-bottom': 0,
                    duration: .5,
                    ease: "power3.in",
                }
            )

            seperatorTimeline.to(
                '.seperator',
                {
                    '--clip-right': 0,
                },
            )

            seperatorTimeline.to(
                '.content2',
                {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    duration: 1,
                    ease: "power4.out",
                },
                '-=.1'

            )



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
                    <div className={`${styles.separator} seperator`} />
                    <div className={`${styles.content} content2`}>
                        <h3 className={styles.contentTitle}>Un Développeur Orienté UX</h3>
                        <p className={styles.text}>Chaque demande client est minutieusement analysée et traitée tout en priorisant une expérience utilisateur optimale et en respectant le thème global du produit.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Design;
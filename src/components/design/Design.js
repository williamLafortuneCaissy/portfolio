"use client"

import { useRef } from "react";
import GridSpot from "../gridSpot/GridSpot";
import styles from "./design.module.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";

const Design = () => {
    const t = useTranslations('Design');
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
                <h2 className={`${styles.title} fadeIn`}>
                    {t.rich('title', { 
                        highlight: (chunks) => <span className="gradientText">{chunks}</span> 
                    })}
                </h2>
                <div className={styles.grid}>
                    <div className={`${styles.content} fadeIn`}>
                        <h3 className={styles.contentTitle}>{t('designer.title')}</h3>
                        <p className={styles.text}>{t('designer.text')}</p>
                    </div>
                    <div className={`${styles.separator} seperator`} />
                    <div className={`${styles.content} content2`}>
                        <h3 className={styles.contentTitle}>{t('programmer.title')}</h3>
                        <p className={styles.text}>{t('programmer.text')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Design;
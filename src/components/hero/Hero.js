"use client"

import { useRef } from "react";
import Button from "../button/Button";
import GridSpot from "../gridSpot/GridSpot";
import styles from "./hero.module.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PlanetGraphic from "../planetGraphic/PlanetGraphic";
import { useTranslations } from "next-intl";

const Hero = () => {
    const heroRef = useRef();
    const t = useTranslations('Hero');

    gsap.registerPlugin(useGSAP, ScrollTrigger);

    const handleOnloadAnimations = () => {
        const timeline = gsap.timeline();
            
        const stagger = 0.1;
        const duration = 1;
        timeline.fromTo(
            '.fadeIn',
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration, stagger }
        ); 
        timeline.fromTo(
            '.slideIn',
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0},
            `-=${duration - stagger}` 
        );
        
        timeline.to(
            '.gradient',
            { backgroundPosition: 0, duration: 3, ease: "power4.out"},
        );
    }

    useGSAP(
        () => {
            handleOnloadAnimations();

            // sticky hero needs gsap to prevent conflict with sticky footer
            ScrollTrigger.create({
                trigger: ".pinnedContent",
                start: "top top",
                end: "bottom top",
                pin: true,
                pinSpacing: false
              });

        },{ scope: heroRef }
    );

    return (
        <section className={`${styles.hero}`} ref={heroRef}>
            <div className="isolatedRelative pinnedContent">
                <GridSpot squareMask size="100% 40%" position="top" />
                <div className={`${styles.content} `}>
                    <h1></h1>
                    <h1 className={`${styles.title} fadeIn`}>
                        {t('title_1')} <br />
                        <span className={`${styles.animatedGradient} gradient`}>{t('title_2')}</span>
                    </h1>
                    <p className={`${styles.subtitle} fadeIn`}>{t('subtitle')} </p>
                    <div className={`${styles.ctas} fadeIn`}>
                        <Button as="a" href="#contact">{t('contact')} </Button>
                        <Button as="a" href="./cv.pdf" secondary target="_blank">{t('cv')} </Button>
                    </div>
                </div>
            </div>
            <PlanetGraphic className={`slideIn`} />
        </section>
    );
}

export default Hero;
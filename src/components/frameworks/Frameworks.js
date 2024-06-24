"use client"

import Image from "next/image";
import Button from "../button/Button";
import GridSpot from "../gridSpot/GridSpot";
import styles from "./frameworks.module.css";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";

const frameworks = [
    {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
    },
    {
        name: "Nextjs",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
        style: {
            borderRadius: "50%",
            border: "1px solid white"
        }
    },
    {
        name: "Sass",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
    },
    {
        name: "Bootstrap",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
    },
    {
        name: "Tailwind",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
    },
    {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
    },

]

const Frameworks = () => {
    const t = useTranslations('Frameworks');
    const frameworkRef = useRef();
    const contentRef = useRef();

    gsap.registerPlugin(useGSAP, ScrollTrigger);

    useGSAP(
        () => {
            gsap.fromTo(
                '.fadeIn',
                { opacity: 0, y: -40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.5,
                    stagger: .1,
                    scrollTrigger: {
                        trigger: contentRef.current,
                        start: 'top center',
                        toggleActions: 'restart pause resume reverse',
                    },
                    ease: "power4.out",
                },
            );

        }, { scope: frameworkRef }
    );

    return (
        <section className="isolatedRelative" ref={frameworkRef}>
            <GridSpot size="50vw 50vw" position="right" desktopOnly />
            <GridSpot size="120vw 120vw" position="bottom" mobileOnly />
            <div className={styles.container} ref={contentRef}>
                <div className={styles.content}>
                    <h2 className={`${styles.title} fadeIn`}>
                        {t.rich('title', {
                            highlight: (chunks) => <div className="gradientText">{chunks}</div>
                        })}
                    </h2>
                    <p className={`${styles.text} fadeIn`}>{t('text')}</p>
                    <div className={`${styles.ctas} fadeIn`}>
                        <Button as="a" href="#contact">{t('contact')}</Button>
                        <Button as="a" href="/cv.pdf" secondary target="_blank">{t('cv')}</Button>
                    </div>
                </div>
                <div className={styles.wheel}>
                    {frameworks.map(({ name: frameworkName, icon, style }, key) => (
                        <div className={styles.rotator} style={{ "--rotation-offset": `${360 / frameworks.length * key}deg` }} key={frameworkName}>
                            <Image className={styles.logo} width="64" height="64" src={icon} alt={frameworkName} style={style} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Frameworks;
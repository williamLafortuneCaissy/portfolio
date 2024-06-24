"use client"

import { useRef } from "react";
import { IconChecklist, IconCode, IconPalette } from "../Icons";
import GridSpot from "../gridSpot/GridSpot";
import styles from "./benefits.module.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";

const Benefits = () => {
    const t = useTranslations("Benefits");
    const benefitsRef = useRef();
    const titleRef = useRef();
    const cardRef = useRef([]);

    gsap.registerPlugin(useGSAP, ScrollTrigger);

    const handleTitleAnimation = () => {
        gsap.fromTo(
            titleRef.current,
            {
                opacity: 0,
                y: 100,
            },
            {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: 'top 90%',
                    toggleActions: 'restart pause resume reverse',
                },
            },
        );
    }

    const handleCardsAnimation = () => {
        const onEnterProps = {
            duration: 1,
            opacity: 1,
            x: 0,
            ease: "power4.out"
        }

        const onLeaveProps = {
            duration: 1,
            opacity: 0,
            x: { // make sure you overstire this prop
                top: '-100vw',
                bottom: '100vw',
            },
            ease: "power4.in"
        }

        // animate in
        cardRef.current.forEach(card => {
            gsap.fromTo(card,
                {
                    opacity: 0,
                    x: '100vw'
                },
                {
                    scrollTrigger: {
                        trigger: card,
                        start: "80% bottom",
                        end: "80% 20%",
                        onEnter: (self) => {
                            gsap.to(self.trigger, onEnterProps);
                        },
                        onLeave: (self) => {
                            gsap.to(self.trigger, {
                                ...onLeaveProps,
                                x: onLeaveProps.x.top,
                            });
                        },
                        onEnterBack: (self) => {
                            gsap.to(self.trigger, onEnterProps);
                        },
                        onLeaveBack: (self) => {
                            gsap.to(self.trigger, {
                                ...onLeaveProps,
                                x: onLeaveProps.x.bottom,
                            });
                        }
                    }

                }
            )

            // animate out
            cardRef.current.forEach(card => {
                gsap.fromTo(
                    card,
                    {
                        x: 0,
                    },
                    {
                        x: '-100vw',
                        scrollTrigger: {
                            trigger: card,
                            start: 'bottom 20%',
                        },
                        ease: 'power4.in',
                        duration: 1,
                    },
                );
            })
        })
    }


    useGSAP(
        () => {
            handleTitleAnimation();
            handleCardsAnimation();

        }, { scope: benefitsRef }
    );

    const cardsData = [
        {
            icon: IconCode,
            title: t('programming.title'),
            text: t('programming.text'),
        },
        {
            icon: IconPalette,
            title: t('design.title'),
            text: t('design.text'),
        },
        {
            icon: IconChecklist,
            title: t('communication.title'),
            text: t('communication.text'),
        },
    ];

    return (
        <section className={`${styles.section} isolatedRelative`} ref={benefitsRef}>
            <GridSpot size="40vw 40vw" position="top right" desktopOnly />
            <GridSpot size="40vw 40vw" position="bottom left" desktopOnly />
            <div className={styles.container}>
                <h2 className={`${styles.title} fadeIn`} ref={titleRef}>{t.rich('title', {
                    highlight: (chunks) => <span className="gradientText">{chunks}</span>
                })}</h2>
                <div className={styles.grid}>
                    {cardsData.map(card => (
                        <div className={styles.card} key={card.title} ref={el => cardRef.current.push(el)}>
                            <card.icon className={styles.icon} />
                            <h3 className={styles.cardTitle}>{card.title}</h3>
                            <p className={styles.cardText}>{card.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Benefits;
"use client"

import { useRef } from "react";
import { IconChecklist, IconCode, IconPalette } from "../Icons";
import GridSpot from "../gridSpot/GridSpot";
import styles from "./benefits.module.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const cardsData = [
    {
        icon: IconCode,
        title: 'Front-End Innovant',
        text: 'Transformez vos concepts en interfaces dynamiques, rapides et conviviales grâce à mon expertise en technologies front-end. Fort de plusieurs années d’expérience, je maîtrise les outils et les frameworks modernes pour créer des sites web et des applications performants.',
    },
    {
        icon: IconPalette,
        title: 'Design Intuitif',
        text: 'Avec un souci du détail et une précision technique, j’offre un équilibre parfait qui répond aux besoins des utilisateurs tout en respectant les objectifs du projet. Mon approche permet de transformer les concepts créatifs en interfaces intuitives et engageantes, garantissant une expérience utilisateur exceptionnelle.',
    },
    {
        icon: IconChecklist,
        title: 'Organisation Remarquable',
        text: 'Grâce à une méthode de travail flexible et efficace, je suis capable de m’adapter rapidement aux besoins changeants des projets. Mon excellente communication me permet de collaborer étroitement avec les équipes et les clients, garantissant ainsi des résultats optimaux dans les délais prévus.',
    },
];

const Benefits = () => {
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

    return (
        <section className={`${styles.section} isolatedRelative`} ref={benefitsRef}>
            <GridSpot size="40vw 40vw" position="top right" desktopOnly />
            <GridSpot size="40vw 40vw" position="bottom left" desktopOnly />
            <div className={styles.container}>
                <h2 className={`${styles.title} fadeIn`} ref={titleRef}>L’Expertise Front-End au <span className="gradientText">Service de Votre Vision</span></h2>
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
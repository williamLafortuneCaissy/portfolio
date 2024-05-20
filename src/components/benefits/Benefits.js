import { IconChecklist, IconCode, IconPalette } from "../Icons";
import GridSpot from "../gridSpot/GridSpot";
import styles from "./benefits.module.css";


const Benefits = () => {
    return ( 
        <section className={`relative`}>
            <GridSpot size="40vw 40vw" position="top right" desktopOnly />
            <GridSpot size="40vw 40vw" position="bottom left" desktopOnly />
            <div className={styles.container}>
                <h2 className={styles.title}>L'Expertise Front-End au Service de Votre Vision</h2>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <IconCode className={styles.icon} />
                        <h3 className={styles.cardTitle}>Front-End Innovant</h3>
                        <p className={styles.cardText}>Transformez vos concepts en interfaces dynamiques, rapides et conviviales grâce à mon expertise en technologies front-end. Fort de plusieurs années d'expérience, je maîtrise les outils et les frameworks modernes pour créer des sites web et des applications performants.</p>
                    </div>
                    <div className={styles.card}>
                        <IconPalette className={styles.icon} />
                        <h3 className={styles.cardTitle}>Design Intuitif</h3>
                        <p className={styles.cardText}>Avec un souci du détail et une précision technique, j'offre un équilibre parfait qui répond aux besoins des utilisateurs tout en respectant les objectifs du projet. Mon approche permet de transformer les concepts créatifs en interfaces intuitives et engageantes, garantissant une expérience utilisateur exceptionnelle.</p>
                    </div>
                    <div className={styles.card}>
                        <IconChecklist className={styles.icon} />
                        <h3 className={styles.cardTitle}>Organisation Remarquable</h3>
                        <p className={styles.cardText}>Grâce à une méthode de travail flexible et efficace, je suis capable de m'adapter rapidement aux besoins changeants des projets. Mon excellente communication me permet de collaborer étroitement avec les équipes et les clients, garantissant ainsi des résultats optimaux dans les délais prévus</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Benefits;
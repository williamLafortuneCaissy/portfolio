import GridSpot from "../gridSpot/GridSpot";
import styles from "./design.module.css";

const Design = () => {
    return ( 
        <section className={`isolatedRelative`}>
            <GridSpot size="40vw 40vw" position="top right" desktopOnly />
            <GridSpot size="40vw 40vw" position="bottom left" desktopOnly />
            <GridSpot squareMask size="100vw 20rem" position="top" mobileOnly />
            <div className={styles.container}>
                <h2 className={styles.title}>Un pont entre <span className="gradientText">Design et Développement</span></h2>
                <div className={styles.grid}>
                    <div className={styles.content}>
                        <h3 className={styles.contentTitle}>L’expert Front-end: un atout pour les designers</h3>
                        <p className={styles.text}>En tant que développeur Front-End ayant une bonne compréhention des principes de design, je suis apte à m’impliquer à l’élaboration des maquettes tout en respectant les contraintes techniques de la programmation.</p>
                    </div>
                    <div className={styles.separator} />
                    <div className={styles.content}>
                        <h3 className={styles.contentTitle}>Un Développeur Orienté UX</h3>
                        <p className={styles.text}>Chaque demande client est minutieusement analysée et traitée tout en priorisant une expérience utilisateur optimale et en respectant le thème global du produit.</p>
                    </div>
                </div>
            </div>
        </section>    
    );
}
 
export default Design;
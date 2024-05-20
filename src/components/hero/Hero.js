import Button from "../button/Button";
import GridSpot from "../gridSpot/GridSpot";
import styles from "./hero.module.css";

const Hero = () => {
    return (
      <section className={`${styles.hero} relative`}>
        <GridSpot squareMask size="100% 50%" position="top"/>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Donnez vie à vos idées <br />
            les plus <span className="text-accent">innovant</span>
          </h1>
          <p className={styles.subtitle}>William Lafortune-Caissy, un Développeur Web Front-End qui transforme vos projets en réalité.</p>
          <div className={styles.ctas}>
            <Button as="a" href="#contact">Contactez-moi</Button>
            <Button as="a" href="./cv.pdf" secondary target="_blank">Voir le cv</Button>
          </div>
        </div>
      </section>
    ); 
  }
  
  export default Hero;
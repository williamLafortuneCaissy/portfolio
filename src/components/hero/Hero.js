import Button from "../button/Button";
import styles from "./hero.module.css";

const Hero = () => {
    return (
      <section className={styles.hero}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Donnez vie à vos idées <br />
            les plus <span className="text-accent">innovant</span>
          </h1>
          <p className={styles.subtitle}>William Lafortune-Caissy, un Développeur Web Front-End qui transforme vos projets en réalité.</p>
          <div className={styles.ctas}>
            <Button as="a" href="#contact">Contactez-moi</Button>
            <Button as="a" href="#" secondary>Télécharger le cv</Button>
          </div>
        </div>
      </section>
    ); 
  }
  
  export default Hero;
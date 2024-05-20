import Hero from "@/components/hero/Hero";
import styles from "./page.module.css";
import Benefits from "@/components/benefits/Benefits";
import Frameworks from "@/components/frameworks/Frameworks";
import Design from "@/components/design/Design";
import Contact from "@/components/contact/Contact";
import GridSpot from "@/components/gridSpot/GridSpot";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
          <Hero />
          <img className={styles.heroImg} src="/hero-bg.png" alt="" />
          <Benefits />
          <div className={`${styles.gridSpacer} relative`}>
            <GridSpot size="100%" mobileOnly />
          </div>
          <Frameworks />
          <Design />
          <img className={`${styles.heroImg} ${styles.inverted}`} src="/hero-bg.png" alt="" />
      </main>
      <Contact />
    </>
  );
}

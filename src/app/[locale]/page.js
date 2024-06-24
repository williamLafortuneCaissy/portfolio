import Hero from "@/components/hero/Hero";
import styles from "./page.module.css";
import Benefits from "@/components/benefits/Benefits";
import Frameworks from "@/components/frameworks/Frameworks";
import Design from "@/components/design/Design";
import Contact from "@/components/contact/Contact";
import GridSpot from "@/components/gridSpot/GridSpot";

export default function Home() {
  return (
    <div className={styles.body}>
      <main className={styles.main}>
        <Hero />
        <Benefits />
        <div className={`${styles.gridSpacer} isolatedRelative`}>
          <GridSpot size="100%" mobileOnly />
        </div>
        <Frameworks />
        <Design />
      </main>
      <Contact />
    </div>
  );
}

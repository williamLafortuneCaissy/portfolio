import Hero from "@/components/hero/Hero";
import styles from "./page.module.css";
import Benefits from "@/components/benefits/Benefits";
import Frameworks from "@/components/frameworks/Frameworks";
import Design from "@/components/design/Design";
import Contact from "@/components/contact/Contact";
import GridSpot from "@/components/gridSpot/GridSpot";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
          <Hero />
          <Benefits />
          <div className={`${styles.gridSpacer} relative`}>
            <GridSpot size="100%" mobileOnly />
          </div>
          <Frameworks />
          <Design />
          <Image className={`${styles.heroImg} ${styles.inverted}`} src="./hero-bg.png" alt="" width={1440} height={233} />
      </main>
      <Contact />
    </>
  );
}

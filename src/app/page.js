import Hero from "@/components/hero/Hero";
import styles from "./page.module.css";
import Benefits from "@/components/benefits/Benefits";
import Frameworks from "@/components/frameworks/Frameworks";
import Design from "@/components/design/Design";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Benefits />
      <Frameworks />
      <Design />
    </main>
  );
}

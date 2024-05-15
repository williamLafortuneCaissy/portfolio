import Hero from "@/components/hero/Hero";
import styles from "./page.module.css";
import Benefits from "@/components/benefits/Benefits";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Benefits />
    </main>
  );
}

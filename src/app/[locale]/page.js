import Hero from "@/components/hero/Hero";
import styles from "./page.module.css";
import Benefits from "@/components/benefits/Benefits";
import Frameworks from "@/components/frameworks/Frameworks";
import Design from "@/components/design/Design";
import Contact from "@/components/contact/Contact";
import GridSpot from "@/components/gridSpot/GridSpot";
import { unstable_setRequestLocale } from "next-intl/server";
import {getTranslations} from 'next-intl/server';
 
export async function generateMetadata({params: {locale}}) {
  const t = await getTranslations({locale, namespace: 'Home'});
 
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function Home({ params: { locale } }) {
  unstable_setRequestLocale(locale);

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

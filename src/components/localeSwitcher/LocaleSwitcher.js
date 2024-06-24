'use client';

import { locales } from "@/config";
import { useLocale } from "next-intl";
import Link from "next/link";
import styles from "./localeSwitcher.module.css";

const LocaleSwitcher = () => { 
    const currentLocale = useLocale();
    const altLocale = locales.find((locale) => locale !== currentLocale);
    
    return ( 
        <Link className={styles.link} href={`/${altLocale}`}>{altLocale}</Link>
    );
}
 
export default LocaleSwitcher;
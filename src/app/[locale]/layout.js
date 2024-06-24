import { Nunito } from "next/font/google";
import 'reset-css';
import "./reset.css";
import "./globals.css";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "William Lafortune-Caissy",
  description: "Portfolio de William Lafortune-Caissy, développeur Front-End à Sainte-Sophie. Ouvert aux opportunités d'emploi sur place, hybride ou en télétravail dans les environs de Saint-Jérôme, Terrebonne et Mirabel.",
};

const locales = ['en', 'fr'];

export function generateStaticParams() {
  console.log('generateStaticParams');
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params: { locale } }) {
  unstable_setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <body className={nunito.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

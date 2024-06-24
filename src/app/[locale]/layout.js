import { Nunito } from "next/font/google";
import 'reset-css';
import "./reset.css";
import "./globals.css";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

const nunito = Nunito({ subsets: ["latin"] });

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

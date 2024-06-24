import { Nunito } from "next/font/google";
import 'reset-css'; 
import "./reset.css";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "William Lafortune-Caissy",
  description: "Portfolio de William Lafortune-Caissy, développeur Front-End à Sainte-Sophie. Ouvert aux opportunités d'emploi sur place, hybride ou en télétravail dans les environs de Saint-Jérôme, Terrebonne et Mirabel.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning={true}>
      <body className={nunito.className}>{children}</body>
    </html>
  );
}

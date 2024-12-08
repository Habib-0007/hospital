import { ABeeZee } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const abeezee = ABeeZee({ subsets: ["latin"], weight: ["400"] });
export const metadata = {
  title: "Lagos General Hospital",
  description:
    "Providing quality healthcare services to the people of Lagos and beyond",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={abeezee.className}>
        <Header />
        <main className="container mx-auto px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

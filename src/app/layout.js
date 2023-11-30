import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@/components/navbar/Navbar";
import BootstrapClient from "@/components/BootstrapClient";
import { Montserrat } from "next/font/google";
import Footer from "@/components/footer/footer";

const bodyFont = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "E-commerce Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bodyFont.className}>
        <Navbar />
        {children}
        <Footer />
        <BootstrapClient />
      </body>
    </html>
  );
}

"use client";

import { Poppins } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Footer from "./styles/footer.js";
import links from "./data/links.json";
import NavBar from "./styles/nav.js";
import { FormspreeProvider } from '@formspree/react';
import AnimateAllHeadings from "@/app/styles/fade-on-scroll";
import ScrollToTop from './styles/scroll-to-top'; // adjust path as needed


const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300"],
});

const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
         <ScrollToTop />
        <NavBar />
        <div className="scroll-container content min-h-screen flex flex-col">
          <main className="flex-grow">
            <FormspreeProvider project={formspreeId}>
              <AnimateAllHeadings/>
              {children}
            </FormspreeProvider>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

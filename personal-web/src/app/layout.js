"use client";

import { Poppins } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Footer from "./styles/footer.js";
import links from "./data/links.json";
import NavBar from "./styles/nav.js";
import { FormspreeProvider } from '@formspree/react';

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
      <NavBar />
          <div className="scroll-container content min-h-screen flex flex-col">
            <main className="flex-grow">
              {children}
              
            </main>
            <Footer />
          </div>
      </body>
    </html>
  );
}

"use client";

import { Poppins } from "next/font/google";
import Link from "next/link"; // Import Link for routing
import "./globals.css";
import "./styles/footer";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {/* Navigation Bar */}
        <nav className="navbar">
          <div className="nav-container">
            {/* Logo that triggers navigation */}
            <div className="logo">
              <Link href="/">Rachal's Place</Link> {/* Link to Home */}
            </div>
            <ul className="nav-links">
              <li>
                <Link href="/">Home</Link> {/* Link to Home */}
              </li>
              <li>
                <Link href="/about">About</Link> {/* Link to About */}
              </li>
              <li>
                <Link href="/projects">Projects</Link> {/* Link to Contact */}
              </li>
              <li>
                <Link href="/contact">Contact</Link> {/* Link to Contact */}
              </li>
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <div className="scroll-container content">
          {children}
        </div>
        
      </body>
      
    </html>
  );
}

"use client";
import Link from "next/link";
import links from "@/app/data/links.json";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <Link href="/">Rachal's Place</Link>
        </div>
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

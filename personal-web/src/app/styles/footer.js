// components/Footer.jsx
import Link from "next/link";
import links from "@/app/data/links.json";
import constants from "@/app/Code/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* Quick links */}
        <ul className="footer-links">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>

        {/* Legal */}
        <div>
          <h4 className="font-semibold mb-2">Legal</h4>
          <ul className="space-y-1">
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold mb-2">Social</h4>
          <ul className="space-y-1">
            <li><a href={constants.linkedin}  target="_blank" rel="noopener">LinkedIn</a></li>
            <li><a href={constants.github}   target="_blank" rel="noopener">GitHub</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p className="text-sm">
            <a href={`mailto:${constants.email}`}>{constants.email}</a>
          </p>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 mt-6">
        © {new Date().getFullYear()} Rachal’s Place. All rights reserved.
      </div>
    </footer>
  );
}

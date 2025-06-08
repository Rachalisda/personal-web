// components/Footer.jsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* Quick links */}
        <div>
          <h4 className="font-semibold mb-2">Site</h4>
          <ul className="space-y-1">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

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
            <li><a href="https://twitter.com/yourhandle" target="_blank" rel="noopener">Twitter</a></li>
            <li><a href="https://github.com/yourhandle"  target="_blank" rel="noopener">GitHub</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p className="text-sm">
            123 Main St.<br/>
            Framingham, MA<br/>
            <a href="mailto:hi@example.com">hi@example.com</a>
          </p>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 mt-6">
        © {new Date().getFullYear()} Rachal’s Place. All rights reserved.
      </div>
    </footer>
  );
}

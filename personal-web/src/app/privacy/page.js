export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text-color)] px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-[var(--emphasis)]">
          Privacy Policy
        </h1>

        <p className="mb-6">
          Your privacy is important to us. This Privacy Policy outlines how we
          collect, use, and protect your information when you use this website
          ("Site").
        </p>

        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">1. Information We Collect</h2>
            <p>
              We may collect basic personal information you provide voluntarily,
              such as your name or email address if you fill out a contact form.
              We may also collect non-personal information like your browser type
              or pages visited for analytics purposes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">2. How We Use Your Information</h2>
            <p>Your information is used to:</p>
            <ul className="list-disc ml-6">
              <li>Respond to your inquiries</li>
              <li>Improve the performance and content of the Site</li>
              <li>Understand how users interact with the Site</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">3. Cookies</h2>
            <p>
              This Site may use cookies to enhance user experience or collect
              analytics. You can disable cookies through your browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">4. Data Sharing</h2>
            <p>
              We do not sell or share your personal information with third parties,
              except when required by law or to protect our rights.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">5. Data Security</h2>
            <p>
              We take reasonable steps to protect your information, but no method
              of transmission over the internet is 100% secure.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">6. Third-Party Links</h2>
            <p>
              This Site may contain links to third-party websites. We are not
              responsible for the privacy practices or content of those sites.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">7. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy occasionally. Any changes will be
              posted on this page with the updated date.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">8. Contact</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact
              us using the form on this Site.
            </p>
          </div>
        </section>

        <p className="mt-10 text-sm text-gray-400 italic">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </main>
  );
}

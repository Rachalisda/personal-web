export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

      <p className="mb-4">
        Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your information when you use this website ("Site").
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <p className="mb-4">
        We may collect basic personal information you provide voluntarily, such as your name or email address if you fill out a contact form. We may also collect non-personal information like your browser type or pages visited for analytics purposes.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
      <p className="mb-2">Your information is used to:</p>
      <ul className="list-disc ml-6 mb-4">
        <li>Respond to your inquiries</li>
        <li>Improve the performance and content of the Site</li>
        <li>Understand how users interact with the Site</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Cookies</h2>
      <p className="mb-4">
        This Site may use cookies to enhance user experience or collect analytics. You can disable cookies through your browser settings.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Data Sharing</h2>
      <p className="mb-4">
        We do not sell or share your personal information with third parties, except when required by law or to protect our rights.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Data Security</h2>
      <p className="mb-4">
        We take reasonable steps to protect your information, but no method of transmission over the internet is 100% secure.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Third-Party Links</h2>
      <p className="mb-4">
        This Site may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Changes to This Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy occasionally. Any changes will be posted on this page with the updated date.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">8. Contact</h2>
      <p className="mb-4">
        If you have any questions about this Privacy Policy, please contact us using the form on this Site.
      </p>

      <p className="mt-8 text-sm text-gray-500">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
}

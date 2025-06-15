export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text-color)] px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-[var(--emphasis)]">
          Terms of Service
        </h1>

        <p className="mb-6">
          By accessing and using this website ("Site"), you agree to the following
          Terms of Service. If you do not agree, please do not use the Site.
        </p>

        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">1. Use of Content</h2>
            <p>
              All content provided on this Site is for informational purposes only.
              You may not copy, distribute, or reuse any content without written
              permission, unless otherwise stated.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">2. User Responsibilities</h2>
            <p>
              You agree to use this Site only for lawful purposes. You must not
              use this Site to harm, disrupt, or interfere with its content,
              security, or users.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">3. External Links</h2>
            <p>
              This Site may contain links to third-party websites. We are not
              responsible for the content or practices of any linked websites.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">4. Limitation of Liability</h2>
            <p>
              This Site is provided "as is" and without warranties of any kind.
              We are not liable for any damages or losses related to your use of
              the Site.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">5. Privacy</h2>
            <p>
              We respect your privacy. Any data collected through forms or
              interactions with the Site will be handled in accordance with our
              Privacy Policy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">6. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. By continuing to use the
              Site, you agree to the updated Terms.
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

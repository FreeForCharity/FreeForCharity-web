export default function PrivacyPolicy() {
  return (
    <main className="ffc-container py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-[var(--font-faustina)] text-[48px] leading-[60px] mb-8">Privacy Policy</h1>
        
        <div className="prose max-w-none font-[var(--font-lato)] text-[18px] leading-[28px]">
          <p><strong>Effective Date:</strong> January 1, 2024</p>
          
          <h2 className="font-[var(--font-faustina)] text-[32px] leading-[40px] mt-8 mb-4">Information We Collect</h2>
          <p>Free For Charity collects information you provide directly to us, such as when you:</p>
          <ul>
            <li>Apply for our services</li>
            <li>Contact us via email or phone</li>
            <li>Volunteer or donate</li>
            <li>Use our website</li>
          </ul>

          <h2 className="font-[var(--font-faustina)] text-[32px] leading-[40px] mt-8 mb-4">How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide our services to qualified 501(c)(3) organizations</li>
            <li>Communicate with you about our programs</li>
            <li>Process donations and volunteer applications</li>
            <li>Improve our services</li>
          </ul>

          <h2 className="font-[var(--font-faustina)] text-[32px] leading-[40px] mt-8 mb-4">Information Sharing</h2>
          <p>We do not sell, trade, or otherwise transfer your personal information to outside parties except as described in this policy or with your consent.</p>

          <h2 className="font-[var(--font-faustina)] text-[32px] leading-[40px] mt-8 mb-4">Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us at:</p>
          <p>
            Email: <a href="mailto:clarkemoyer@freeforcharity.org" className="text-primary hover:underline">clarkemoyer@freeforcharity.org</a><br />
            Phone: (520) 222-8104
          </p>
        </div>
      </div>
    </main>
  );
}
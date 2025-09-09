export default function TermsOfService() {
  return (
    <main className="ffc-container py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-[var(--font-faustina)] text-[48px] leading-[60px] mb-8">Terms of Service</h1>
        
        <div className="prose max-w-none font-[var(--font-lato)] text-[18px] leading-[28px]">
          <p><strong>Effective Date:</strong> January 1, 2024</p>
          
          <h2 className="font-[var(--font-faustina)] text-[32px] leading-[40px] mt-8 mb-4">Acceptance of Terms</h2>
          <p>By accessing and using Free For Charity&apos;s services, you accept and agree to be bound by the terms and provision of this agreement.</p>

          <h2 className="font-[var(--font-faustina)] text-[32px] leading-[40px] mt-8 mb-4">Eligibility</h2>
          <p>Our services are available to qualified 501(c)(3) nonprofit organizations in good standing. Organizations must meet our eligibility requirements to receive services.</p>

          <h2 className="font-[var(--font-faustina)] text-[32px] leading-[40px] mt-8 mb-4">Service Provision</h2>
          <p>Free For Charity provides technology services including but not limited to:</p>
          <ul>
            <li>Domain registration and management</li>
            <li>Web hosting services</li>
            <li>Email services</li>
            <li>Technical consultation</li>
          </ul>

          <h2 className="font-[var(--font-faustina)] text-[32px] leading-[40px] mt-8 mb-4">Limitations</h2>
          <p>Services are provided on an as-available basis. Free For Charity reserves the right to modify or discontinue services with appropriate notice.</p>

          <h2 className="font-[var(--font-faustina)] text-[32px] leading-[40px] mt-8 mb-4">Contact Information</h2>
          <p>For questions about these Terms of Service, please contact us at:</p>
          <p>
            Email: <a href="mailto:clarkemoyer@freeforcharity.org" className="text-primary hover:underline">clarkemoyer@freeforcharity.org</a><br />
            Phone: (520) 222-8104
          </p>
        </div>
      </div>
    </main>
  );
}
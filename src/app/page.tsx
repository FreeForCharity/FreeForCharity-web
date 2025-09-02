import FAQ from "./components/FAQ";
import { faqs } from "./data/faqs";
import Team from "./components/Team";
import { team } from "./data/team";
import Testimonials from "./components/Testimonials";
import { testimonials } from "./data/testimonials";
import Results from "./components/Results";
import VolunteerCTA from "./components/VolunteerCTA";
import GetStarted from "./components/GetStarted";
import Programs from "./components/Programs";
import EndowmentFeatures from "./components/EndowmentFeatures";
import DonateButton from "./components/DonateButton";
import VolunteerButton from "./components/VolunteerButton";

export default function Home() {
  return (
    <main>
      {/* Hero / Landing */}
      <section className="bg-primary text-white relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute left-[-15%] md:left-[-10%] bottom-[14rem] md:bottom-[18rem] w-[220%] h-6 md:h-8 bg-white rotate-[-22deg] z-0" />
        <div className="ffc-container relative z-10 py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div>
              <h1 className="font-[var(--font-faustina)] font-medium text-[48px] leading-[60px] md:text-[60px] md:leading-[72px]">
                Welcome to Free For Charity
              </h1>
              <p className="mt-4 font-[var(--font-lato)] text-[20px] leading-6 md:text-[24px] md:leading-[29px]">
                Connecting Students, Professionals, & Businesses with Charities in Need
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <VolunteerButton />
                <DonateButton />
                <a href="#programs" className="inline-flex items-center justify-center rounded-[27px] bg-white text-[#113563] px-6 py-3 text-[20px] font-[var(--font-lato)]">
                  Our Programs
                </a>
              </div>
            </div>
            <div className="grid place-items-center">
              <div className="w-[260px] h-[260px] md:w-[383px] md:h-[383px] rounded-full bg-white shadow-[0_6px_32px_rgba(0,0,0,0.16)] flex items-center justify-center overflow-hidden">
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/web-app-manifest-512x512.png`}
                  alt="Free For Charity mark"
                  className="max-w-full max-h-full object-contain"
                  width={383}
                  height={383}
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-16">
        <div className="ffc-container text-center">
          <h2 className="font-[var(--font-faustina)] text-[40px] leading-[48px]">
            Free For Charity has a simple mission with broad implications
          </h2>
          <p className="mt-4 font-[var(--font-lato)] text-[20px] leading-[30px] max-w-4xl mx-auto">
            Reduce costs and increase revenues for nonprofits; putting that money back into their charitable mission where it belongs.
          </p>
          <p className="mt-3 font-[var(--font-lato)] text-[20px] leading-[30px] max-w-4xl mx-auto">
            This charity for charities seeks to replace as many functions as possible that current nonprofits pay for to for-profit companies with free or at cost work from our campus, on site projects, or partnerships with other entities.
          </p>
          <div className="mt-6">
            <DonateButton className="inline-flex items-center justify-center rounded-[27px] bg-primary text-white px-6 py-3 text-[20px] font-[var(--font-lato)] cursor-pointer hover:brightness-110 transition">Donate to Free For Charity</DonateButton>
          </div>
        </div>
      </section>

      {/* Endowment Features */}
      <section className="py-16">
        <EndowmentFeatures
          features={[
            {
              title: "Sustainable Funding",
              body:
                "The Endowment ensures that only the investment gains are used, providing a sustainable funding source for the Free For Charity Domain Program.",
            },
            {
              title: "Long-Term Impact",
              body:
                "By supporting the Endowment, you contribute to a lasting legacy that will continuously support charities in need of digital resources.",
            },
            {
              title: "Goal of $1,000,000",
              body:
                "Our target is to raise $1,000,000 to secure the future of the program, ensuring ongoing support for countless charities.",
            },
            {
              title: "Be a Champion for Change",
              body:
                "By taking donations on our behalf, you become an essential part of our mission, creating a ripple effect of generosity and support.",
            },
          ]}
        />
      </section>

      {/* Programs */}
      <section id="programs" className="py-16">
        <Programs
          domains={{
            heading: "FFC Domains",
            description:
              "Provides free .org domain names, Microsoft 365 with Outlook email, & Microsoft Teams to 501c3 charities.",
            ctaLabel: "Learn More and Apply",
            ctaHref: "#",
            features: [
              {
                title: ".org Domain Registration",
                forYou:
                  "Leverage a .org domain name to enhance your charity's credibility, trustworthiness, and online presence, making it easier to attract donors and supporters",
              },
              {
                title: "Cloudflare DNS",
                forYou: "Faster website load times and enhanced security",
                forUs: "Centralized management and automation tools.",
              },
              {
                title: "Charity Email Address",
                forYou:
                  "Using a charity email address (e.g., yourname@yourcharity.org) enhances your organization's credibility and professionalism, making it easier to build trust with donors, volunteers, and stakeholders",
                forUs:
                  "We benefit by ensuring charities use professional email addresses, which helps maintain our servers' integrity and provides a more secure and reliable communication platform for our volunteers",
              },
              {
                title: "Microsoft 365",
                forYou: "Professional email and collaboration tools",
                forUs: "Streamlined communication and support processes",
              },
            ],
          }}
          hosting={{
            heading: "FFC Hosting",
            description:
              "Free shared hosting for nonprofit organizations, along with WordPress installation and management, and access to our premium plugins and themes from:",
            ctaLabel: "Learn More and Apply",
            ctaHref: "#",
            features: [
              {
                title: "Managed WordPress",
                forYou: "Easy-to-use, flexible content management for your website",
                forUs: "Standardized platform for efficient support and management",
              },
              {
                title: "InterServer US Based Hosting",
                forYou:
                  "No cost, US-based, shared hosting in New Jersey with chat support",
                forUs:
                  "Standardized DirectAdmin panel hosting and Softaculous software for WordPress install",
              },
              {
                title: "WPMU DEV Plugins",
                forYou: "Enterprise-grade security, performance, and management tools",
                forUs: "Centralized management and monitoring of all partner websites",
              },
              {
                title: "Divi Design Builder",
                forYou:
                  "Leverage Divi's visual drag-and-drop builder, pre-made layouts, and responsive editing tools to create and manage professional websites without needing coding skills.",
                forUs:
                  "Efficiently support charities with advanced web development tools and train our volunteers on cutting-edge technology, enhancing their technical skills and our service quality.",
              },
            ],
          }}
          consulting={{
            heading: "FFC Consulting",
            description:
              "Lorem ipsum dolor sit amet. Cum porro quia quo minima beatae rem quia perspiciatis ex velit cupiditate id tempore enim in ipsa mollitia sit veniam consequatur.",
            ctaLabel: "Learn More and Apply",
            ctaHref: "#",
            features: [
              {
                title: "Northwest Registered Agent",
                forYou:
                  "Leverage Northwest Registered Agent's services to maintain compliance with state requirements, including registered agent services, nonprofit corporation filing, and initial charity IRS application.",
                forUs:
                  "Efficiently support charities by ensuring they meet legal requirements and train our volunteers on managing compliance, business formation processes, and IRS applications.",
              },
            ],
          }}
          partners={[
            {
              name: "VolunteerMatch",
              forYou: "Access to a large pool of potential volunteers",
              forUs: "Validation of your active community engagement",
            },
            {
              name: "TechSoup",
              forYou: "Access to discounted software and technology resources",
              forUs: "Additional validation of your non-profit status",
            },
            {
              name: "PayPal",
              forYou: "Easy, secure online donation processing",
              forUs: "Standardized financial transaction system for all partners",
            },
          ]}
        />
      </section>

      {/* Get Started */}
      <section className="py-16">
        <GetStarted />
      </section>

      {/* Volunteer with Us */}
      <section className="py-16">
        <VolunteerCTA />
      </section>

      {/* Results */}
      <section className="py-16">
        <Results
          stats={[
            { value: 221, label: "Organizational partners" },
            { value: 3, label: "Total volunteers" },
            { value: 221, label: "Organizations accessing technical assistance offerings" },
            { value: 25, label: "Volunteer hours contributed to the organization" },
          ]}
        />
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <Testimonials items={testimonials} />
      </section>

      {/* Team */}
      <section className="py-16">
        <Team members={team} />
      </section>

      {/* FAQ */}
      <section className="py-16">
        <FAQ items={faqs} />
      </section>
    </main>
  );
}

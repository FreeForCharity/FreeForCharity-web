"use client";

import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { usePopups } from "./PopupProvider";

export default function Footer() {
  const { openDonation, openVolunteer } = usePopups();
  return (
    <footer className="bg-primary text-white mt-16">
      <div className="ffc-container py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Endorsements / Logo block */}
          <div>
            <h3 className="font-[var(--font-faustina)] text-[24px] leading-[30px] mb-4">Endorsements</h3>
            <div className="relative inline-block" style={{ width: 150, height: 150 }}>
              <iframe
                src="https://widgets.guidestar.org/TransparencySeal/9326392"
                title="Candid/GuideStar Seal of Transparency"
                loading="lazy"
                className="w-[150px] h-[150px] border border-white/30 bg-white"
              />
              <a
                href="https://www.guidestar.org/profile/46-2471893"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View our GuideStar profile"
                className="absolute inset-0"
              >
                <span className="sr-only">Open GuideStar profile</span>
              </a>
            </div>
            <p className="mt-4 font-[var(--font-lato)] text-[17px] leading-[20px]">Free For Charity EIN: 46-2471893</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-[var(--font-faustina)] text-[24px] leading-[30px] mb-4">Quick Links</h3>
            <ul className="space-y-2 font-[var(--font-faustina)] text-[17px] leading-[21px]">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li>
                <a
                  href="#donate"
                  onClick={(e) => { e.preventDefault(); openDonation(); }}
                  className="hover:underline cursor-pointer"
                >
                  Donate
                </a>
              </li>
              <li>
                <a
                  href="#volunteer"
                  onClick={(e) => { e.preventDefault(); openVolunteer(); }}
                  className="hover:underline cursor-pointer"
                >
                  Volunteer
                </a>
              </li>
              <li><a href="#" className="hover:underline">Help For Charities</a></li>
              <li><a href="#" className="hover:underline">Pre-501c3 Onboarding</a></li>
              <li><a href="#" className="hover:underline">501c3 Onboarding</a></li>
              <li><a href="#" className="hover:underline">Supported Charity Login</a></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="font-[var(--font-fauna-one)] text-[24px] leading-[30px] mb-4">Free For Charity Policy</h3>
            <ul className="space-y-2 font-[var(--font-fauna-one)] text-[17px] leading-[21px]">
              <li><a href="#" className="hover:underline">Donation Policy</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-[var(--font-faustina)] text-[24px] leading-[30px] mb-4">Contact Us</h3>
            <div className="space-y-4 font-[var(--font-faustina)]">
              <div className="flex items-start gap-2.5">
                <Mail size={40} className="text-accent shrink-0" aria-hidden />
                <div>
                  <p className="text-[20px] leading-[25px]">Email</p>
                  <p className="text-[17px] leading-[21px]">
                    <a href="mailto:clarkemoyer@freeforcharity.org" className="hover:underline text-white hover:text-accent transition-colors">
                      clarkemoyer@freeforcharity.org
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone size={40} className="text-accent shrink-0" aria-hidden />
                <div>
                  <p className="text-[20px] leading-[25px]">Call Us Today</p>
                  <p className="text-[17px] leading-[21px]">
                    <a href="tel:+15202228104" className="hover:underline text-white hover:text-accent transition-colors">
                      (520) 222-8104
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin size={40} className="text-accent shrink-0" aria-hidden />
                <div>
                  <p className="text-[20px] leading-[25px]">Main Address</p>
                  <p className="text-[17px] leading-[21px]">
                    <a 
                      href="https://maps.google.com/maps?q=4030+Wake+Forrest+Road+Suite+349,+Raleigh,+NC+27609" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:underline text-white hover:text-accent transition-colors"
                    >
                      4030 Wake Forrest Road Suite 349, Raleigh, NC 27609
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin size={40} className="text-accent shrink-0" aria-hidden />
                <div>
                  <p className="text-[20px] leading-[25px]">PA Office Address</p>
                  <p className="text-[17px] leading-[21px]">
                    <a 
                      href="https://maps.google.com/maps?q=301+Science+Park+Road+Suite+119,+State+College,+PA+16803" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:underline text-white hover:text-accent transition-colors"
                    >
                      301 Science Park Road Suite 119, State College, PA 16803
                    </a>
                  </p>
                </div>
              </div>

              {/* Social icons */}
              <div className="pt-2 flex items-center gap-2.5">
                <a href="#" aria-label="Facebook" className="inline-flex w-10 h-10 items-center justify-center rounded-md bg-accent">
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a href="#" aria-label="Twitter" className="inline-flex w-10 h-10 items-center justify-center rounded-md bg-accent">
                  <Twitter className="w-5 h-5 text-white" />
                </a>
                <a href="#" aria-label="Instagram" className="inline-flex w-10 h-10 items-center justify-center rounded-md bg-accent">
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a href="#" aria-label="LinkedIn" className="inline-flex w-10 h-10 items-center justify-center rounded-md bg-accent">
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-white/50 my-6" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-[var(--font-lato)] text-[16px] leading-[24px] text-center md:text-left">
            All Rights Are Reserved by Free For Charity a US 501c3 Non Profit | Hosting Supported by interserver.net
          </p>
          <div className="flex items-center gap-6 font-[var(--font-lato)] text-[16px] leading-[19px]">
            <a href="#" className="hover:underline">Terms of use</a>
            <a href="#" className="hover:underline">Privacy policy</a>
            <a href="#donate" className="hover:underline">Donation policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}



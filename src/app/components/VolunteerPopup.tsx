"use client";

import { useEffect, useMemo, useState } from "react";

type Opportunity = {
  title: string;
  location: string;
  type: "Virtual" | "On-site" | "Hybrid";
  summary: string;
};

const OPPORTUNITIES: Opportunity[] = [
  {
    title: "Social Media Manager",
    location: "Virtual",
    type: "Virtual",
    summary:
      "Help set up social accounts, plan content calendars, and craft engaging posts for nonprofits without in-house staff.",
  },
  {
    title: "Volunteer Recruiter & Onboarding Manager (State College, PA)",
    location: "State College, PA",
    type: "On-site",
    summary:
      "Coordinate volunteer sourcing, conduct screenings, and streamline onboarding from our office or at-home setup.",
  },
  {
    title: "Volunteer Recruiter & Onboarding Manager (Work From Home)",
    location: "Remote",
    type: "Virtual",
    summary:
      "Work from home to recruit and onboard volunteers, manage communications, and maintain documentation.",
  },
  {
    title: "WordPress Web Developer (State College, PA)",
    location: "State College, PA",
    type: "On-site",
    summary:
      "Build and maintain nonprofit websites, implement themes/plugins, and support accessibility and performance.",
  },
  {
    title: "WordPress Web Developer (Work From Home)",
    location: "Remote",
    type: "Virtual",
    summary:
      "Develop and support WordPress sites remotely using our managed stack and shared components.",
  },
];

export default function VolunteerPopup({ showToggleButton = true, isOpen: controlledIsOpen, onClose }: { showToggleButton?: boolean; isOpen?: boolean; onClose?: () => void }) {
  const [isMounted, setIsMounted] = useState(false);
  const isControlled = typeof controlledIsOpen === "boolean";
  const [localIsOpen, setLocalIsOpen] = useState(false);
  const isOpen = isControlled ? (controlledIsOpen as boolean) : localIsOpen;

  // Simple form state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState<string>("");
  const [message, setMessage] = useState("");

  const isSubmitEnabled = useMemo(() => {
    return firstName.trim() !== "" && lastName.trim() !== "" && /.+@.+\..+/.test(email);
  }, [firstName, lastName, email]);

  useEffect(() => {
    setIsMounted(true);
    if (isControlled) return;
    const open = () => setLocalIsOpen(true);
    const syncFromHash = () => {
      if (window.location.hash === "#volunteer") setLocalIsOpen(true);
    };
    syncFromHash();
    window.addEventListener("open-volunteer-popup", open as EventListener);
    window.addEventListener("hashchange", syncFromHash);
    return () => {
      window.removeEventListener("open-volunteer-popup", open as EventListener);
      window.removeEventListener("hashchange", syncFromHash);
    };
  }, [isControlled]);

  if (!isMounted) return null;

  return (
    <>
      {/* Toggle button (optional quick access) */}
      {!isControlled && showToggleButton && (
        <button
          aria-label="Open volunteer popup"
          onClick={() => {
            if (window.location.hash !== "#volunteer") {
              window.location.hash = "volunteer";
            } else {
              setLocalIsOpen(true);
            }
          }}
          className="fixed bottom-5 right-28 z-40 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-white shadow-lg hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-accent"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-accent" />
          <span className="font-[var(--font-lato)] text-[16px]">Volunteer</span>
        </button>
      )}

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-4"
          onClick={() => (isControlled ? onClose?.() : setLocalIsOpen(false))}
        >
          <div
            className="ffc-card w-full max-w-5xl bg-paper border-4 border-primary rounded-xl shadow-xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 border-b px-6 py-4">
              <div>
                <h3 className="font-[var(--font-faustina)] text-[20px] leading-7 md:text-[24px] text-primary">
                  Volunteer with Free For Charity
                </h3>
                <p className="mt-1 font-[var(--font-lato)] text-[13px] md:text-[14px] leading-5 text-ink/80">
                  You can create a measurable impact nationwide with your volunteer hours.
                </p>
              </div>
              <button
                aria-label="Close volunteer popup"
                onClick={() => {
                  if (isControlled) {
                    onClose?.();
                  } else {
                    setLocalIsOpen(false);
                    if (window.location.hash === "#volunteer") {
                      history.replaceState(null, "", window.location.pathname + window.location.search);
                    }
                  }
                }}
                className="rounded-full p-1 text-primary hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-accent cursor-pointer transition-transform hover:scale-110"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Body */}
            <div className="px-4 md:px-6 py-3">
              <div className="mt-3 grid md:grid-cols-2 gap-6 items-start">
                {/* Left: Context */}
                <div>
                  <div className="font-[var(--font-lato)] text-[16px] font-bold text-[#F58629]">
                    You can create a measurable impact to the success of charities nationwide.
                  </div>
                  <p className="mt-3 font-[var(--font-fauna-one)] text-[15px] leading-[22px] text-black">
                    Every organization&#39;s success ultimately falls on the support it receives. Free For Charity provides world-class training programs while helping charities across the United States.
                  </p>
                  <p className="mt-4 font-[var(--font-lato)] text-[15px] leading-[22px] text-black">
                    From the day-to-day costs of running servers and websites to paying for software that powers our training programs, your time and skills make a direct difference.
                  </p>
                  <p className="mt-3 font-[var(--font-lato)] text-[15px] leading-[22px] text-black">
                    In addition to financial support, we rely on skilled volunteers and gifts in kind. Explore the opportunities and let us know how you&#39;d like to help.
                  </p>

                  {/* Simple interest form */}
                  <div className="mt-6">
                    <div className="text-center font-[var(--font-lato)] text-[20px] md:text-[22px]">Express Interest</div>
                    <div className="mt-3 grid gap-3">
                      <div className="grid md:grid-cols-2 gap-3">
                        <input value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name*" className="w-full rounded-[20px] border-2 border-accent px-4 py-3" />
                        <input value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name*" className="w-full rounded-[20px] border-2 border-accent px-4 py-3" />
                      </div>
                      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email*" className="w-full rounded-[20px] border-2 border-accent px-4 py-3" />
                      <select value={interest} onChange={(e) => setInterest(e.target.value)} className="w-full rounded-[20px] border-2 border-accent px-4 py-3 text-black/80">
                        <option value="">Select an opportunity (optional)</option>
                        {OPPORTUNITIES.map((o, i) => (
                          <option key={i} value={o.title}>{o.title}</option>
                        ))}
                      </select>
                      <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell us about your skills or interests (optional)" className="w-full rounded-[20px] border-2 border-accent px-4 py-3 min-h-[90px]" />
                      <button disabled={!isSubmitEnabled} className="w-full rounded-[20px] bg-accent px-6 py-3 text-center font-[var(--font-fauna-one)] text-[18px] text-black hover:brightness-110 disabled:opacity-60">
                        Submit Interest
                      </button>
                      <p className="text-center text-[12px] text-ink/60 font-[var(--font-inter)]">This demo does not send data. We will add backend wiring later.</p>
                    </div>
                  </div>
                </div>

                {/* Right: Opportunities */}
                <div className="grid gap-4">
                  {OPPORTUNITIES.map((o, idx) => (
                    <div key={idx} className="rounded-[20px] bg-paper p-0 overflow-hidden border-0 shadow-none">
                      <div className="px-5 py-4">
                        <div className="font-[var(--font-lato)] text-[16px] text-[#3299FA]">{o.title}</div>
                        <div className="mt-1 font-[var(--font-lato)] text-[13px] text-ink/70">{o.type} • {o.location}</div>
                        <p className="mt-2 font-[var(--font-lato)] text-[15px] leading-[18px] text-[#787878]">{o.summary}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}



"use client";

import { useEffect, useState } from "react";

type DonationLink = {
  label: string;
  href: string;
};

const DEFAULT_LINKS: DonationLink[] = [
  { label: "Donate via PayPal", href: "#" },
  { label: "Donate via Card", href: "#" },
  { label: "Learn about our Endowment", href: "#endowment" },
];

export default function DonationPopup({
  // links left for future use; suppress unused var warning by referencing length
  links = DEFAULT_LINKS,
  showToggleButton = true,
  isOpen: controlledIsOpen,
  onClose,
}: {
  links?: DonationLink[];
  showToggleButton?: boolean;
  isOpen?: boolean;
  onClose?: () => void;
}) {
  const isControlled = typeof controlledIsOpen === "boolean";
  const [localIsOpen, setLocalIsOpen] = useState(false);
  const isOpen = isControlled ? (controlledIsOpen as boolean) : localIsOpen;
  const [isMounted, setIsMounted] = useState(false);
  const [frequency, setFrequency] = useState<"one-time" | "monthly" | "yearly">("one-time");
  const [presetAmount, setPresetAmount] = useState<number | null>(150);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [displayNamePublicly, setDisplayNamePublicly] = useState<boolean>(false);
  const [isCorporate, setIsCorporate] = useState<boolean>(false);
  const [isHonor, setIsHonor] = useState<boolean>(false);
  const [paymentMethod, setPaymentMethod] = useState<"card" | "bank">("card");

  // noop usage to avoid unused var lint when not rendered
  void links.length;

  const selectedAmount = (() => {
    const custom = Number(customAmount.replace(/[^0-9.]/g, ""));
    if (!isNaN(custom) && custom > 0) return custom;
    return presetAmount ?? 0;
  })();

  useEffect(() => {
    setIsMounted(true);
    if (isControlled) return;
    const handleOpen = () => setLocalIsOpen(true);
    const syncFromHash = () => {
      if (window.location.hash === "#donate") setLocalIsOpen(true);
    };
    syncFromHash();
    window.addEventListener("open-donation-popup", handleOpen as EventListener);
    window.addEventListener("hashchange", syncFromHash);
    return () => {
      window.removeEventListener("open-donation-popup", handleOpen as EventListener);
      window.removeEventListener("hashchange", syncFromHash);
    };
  }, [isControlled]);

  if (!isMounted) return null;

  return (
    <>
      {/* Toggle button */}
      {!isControlled && showToggleButton && (
        <button
          aria-label="Open donation popup"
          onClick={() => {
            // Use hash to unify behavior across server/client links
            if (window.location.hash !== "#donate") {
              window.location.hash = "donate";
            } else {
              setLocalIsOpen(true);
            }
          }}
          className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-white shadow-lg hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-accent"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-accent" />
          <span className="font-[var(--font-lato)] text-[16px]">Donate</span>
        </button>
      )}

      {/* Overlay */}
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
            <div className="flex items-start justify-between gap-4 border-b px-6 py-4">
              <div>
                <h3 className="font-[var(--font-faustina)] text-[20px] leading-7 md:text-[24px] text-primary">
                  Support Free For Charity
                </h3>
                <p className="mt-1 font-[var(--font-lato)] text-[13px] md:text-[14px] leading-5 text-ink/80">
                  Your contribution helps us reduce costs and increase revenues for nonprofits.
                </p>
              </div>
              <button
                aria-label="Close donation popup"
                onClick={() => {
                  if (isControlled) {
                    onClose?.();
                  } else {
                    setLocalIsOpen(false);
                    if (window.location.hash === "#donate") {
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
            <div className="px-4 md:px-6 py-5">
              <div className="rounded-xl bg-primary px-4 md:px-5 py-4 text-white">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <h4 className="font-[var(--font-faustina)] text-[20px] md:text-[24px] leading-[28px] md:leading-[30px] text-white">Empower Charities with Your Generosity</h4>
                  <div className="font-[var(--font-lato)] text-[16px] md:text-[18px]">$500,000.00 of $1,000,000.00 Raised</div>
                </div>
                <div className="mt-3 h-3 w-full rounded-full bg-white/40">
                  <div className="h-3 rounded-full bg-accent" style={{ width: "50%" }} />
                </div>
              </div>

              {/* Your donation */}
              <div className="mt-6">
                <div className="text-center font-[var(--font-lato)] text-[20px] md:text-[24px] leading-[29px]">Your donation</div>
                <div className="mt-3 mx-auto max-w-xl">
                  <div className="flex rounded-full border-2 border-accent overflow-hidden">
                    {([
                      { key: "one-time", label: "One-time" },
                      { key: "monthly", label: "Monthly" },
                      { key: "yearly", label: "Yearly" },
                    ] as const).map((opt) => (
                      <button
                        key={opt.key}
                        onClick={() => setFrequency(opt.key)}
                        className={`flex-1 px-3 md:px-4 py-2 text-[16px] md:text-[18px] font-[var(--font-lato)] ${
                          frequency === opt.key ? "bg-accent text-black" : "bg-white text-black"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Preset amounts */}
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[30, 150, 750, 3000].map((amt) => (
                    <button
                      key={amt}
                      onClick={() => {
                        setPresetAmount(amt);
                        setCustomAmount("");
                      }}
                      className={`rounded-[20px] border-2 px-3 md:px-4 py-3 text-[16px] md:text-[18px] font-[var(--font-lato)] ${
                        presetAmount === amt && customAmount === "" ? "border-accent" : "border-accent/50"
                      }`}
                    >
                      ${amt.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    </button>
                  ))}
                </div>

                {/* Custom amount */}
                <div className="mt-4">
                  <input
                    inputMode="decimal"
                    placeholder="Enter other amount here"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setPresetAmount(null);
                    }}
                    className="w-full rounded-[20px] border-2 border-accent px-3 md:px-4 py-3 text-[16px] md:text-[18px] font-[var(--font-lato)] placeholder:text-[#C2C2C2]"
                  />
                </div>

                <div className="mt-2 rounded-[12px] bg-[#F8F8FA] px-3 md:px-4 py-3 text-center font-[var(--font-lato)] text-[14px] md:text-[16px] text-ink">
                  We fundraise with Zeffy to ensure 100% of your donation goes to our mission!
                </div>
              </div>

              {/* Your details */}
              <div className="mt-8">
                <div className="text-center font-[var(--font-lato)] text-[20px] md:text-[24px] leading-[29px]">Your details</div>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-1 block font-[var(--font-lato)] text-[16px] md:text-[18px]">First Name*</label>
                    <input className="w-full rounded-[20px] border-2 border-accent px-4 py-3" />
                  </div>
                  <div>
                    <label className="mb-1 block font-[var(--font-lato)] text-[16px] md:text-[18px]">Last Name*</label>
                    <input className="w-full rounded-[20px] border-2 border-accent px-4 py-3" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="mb-1 block font-[var(--font-lato)] text-[16px] md:text-[18px]">Email*</label>
                    <input className="w-full rounded-[20px] border-2 border-accent px-4 py-3" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="mb-1 block font-[var(--font-lato)] text-[16px] md:text-[18px]">Address*</label>
                    <input className="w-full rounded-[20px] border-2 border-accent px-4 py-3" />
                  </div>
                  <div>
                    <label className="mb-1 block font-[var(--font-lato)] text-[16px] md:text-[18px]">City*</label>
                    <input className="w-full rounded-[20px] border-2 border-accent px-4 py-3" />
                  </div>
                  <div>
                    <label className="mb-1 block font-[var(--font-lato)] text-[16px] md:text-[18px]">Zip Code*</label>
                    <input className="w-full rounded-[20px] border-2 border-accent px-4 py-3" />
                  </div>
                  <div>
                    <label className="mb-1 block font-[var(--font-lato)] text-[16px] md:text-[18px]">Country*</label>
                    <input className="w-full rounded-[20px] border-2 border-accent px-4 py-3" />
                  </div>
                  <div>
                    <label className="mb-1 block font-[var(--font-lato)] text-[16px] md:text-[18px]">State*</label>
                    <input className="w-full rounded-[20px] border-2 border-accent px-4 py-3" />
                  </div>
                </div>

                <div className="mt-3 grid gap-2">
                  <label className="inline-flex items-center gap-2 text-[16px] md:text-[18px] font-[var(--font-lato)]">
                    <input type="checkbox" className="size-4 rounded border-accent text-accent" checked={displayNamePublicly} onChange={(e) => setDisplayNamePublicly(e.target.checked)} />
                    Display my name publicly on the campaign page
                  </label>
                  <label className="inline-flex items-center gap-2 text-[16px] md:text-[18px] font-[var(--font-lato)]">
                    <input type="checkbox" className="size-4 rounded border-accent text-accent" checked={isCorporate} onChange={(e) => setIsCorporate(e.target.checked)} />
                    This is a corporate/organization donation
                  </label>
                  <label className="inline-flex items-center gap-2 text-[16px] md:text-[18px] font-[var(--font-lato)]">
                    <input type="checkbox" className="size-4 rounded border-accent text-accent" checked={isHonor} onChange={(e) => setIsHonor(e.target.checked)} />
                    Make this donation in honor or in memory of someone
                  </label>
                </div>
              </div>

              {/* Payment Method */}
              <div className="mt-8">
                <div className="text-center font-[var(--font-lato)] text-[20px] md:text-[24px] leading-[29px]">Payment Method</div>
                <div className="mt-4 grid gap-4">
                  <div className="flex items-center gap-4">
                    <label className="inline-flex items-center gap-2 text-[16px] md:text-[18px] font-[var(--font-lato)]">
                      <input type="radio" name="pm" checked={paymentMethod === "card"} onChange={() => setPaymentMethod("card")} className="size-4" />
                      Card
                    </label>
                    <label className="inline-flex items-center gap-2 text-[16px] md:text-[18px] font-[var(--font-lato)]">
                      <input type="radio" name="pm" checked={paymentMethod === "bank"} onChange={() => setPaymentMethod("bank")} className="size-4" />
                      US bank account
                    </label>
                  </div>

                  {paymentMethod === "card" ? (
                    <div className="grid gap-4">
                      <div>
                        <label className="mb-1 block font-[var(--font-lato)] text-[16px] md:text-[18px]">Card Number</label>
                        <input placeholder="1234 1234 1234 1234" className="w-full rounded-[20px] border-2 border-accent px-4 py-3 placeholder:text-[#C2C2C2]" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="mb-1 block font-[var(--font-lato)] text-[16px] md:text-[18px]">Expiration date</label>
                          <input placeholder="MM/YY" className="w-full rounded-[20px] border-2 border-accent px-4 py-3 placeholder:text-[#C2C2C2]" />
                        </div>
                        <div>
                          <label className="mb-1 block font-[var(--font-lato)] text-[16px] md:text-[18px]">Security code</label>
                          <input placeholder="CVC" className="w-full rounded-[20px] border-2 border-accent px-4 py-3 placeholder:text-[#C2C2C2]" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="rounded-[12px] border-2 border-accent/60 p-4 text-[16px] font-[var(--font-lato)] text-ink/80">
                      Bank payments will be handled securely. Entering bank details is not implemented in this demo.
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-8">
                <button className="w-full rounded-[20px] bg-accent px-6 py-3 text-center font-[var(--font-fauna-one)] text-[18px] text-black hover:brightness-110">
                  Donate {selectedAmount > 0 ? `$${selectedAmount.toLocaleString(undefined, { minimumFractionDigits: 2 })}` : ""}
                </button>
                <p className="mt-2 text-center font-[var(--font-inter)] text-[12px] text-ink/60">
                  Thank you for supporting our mission.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}



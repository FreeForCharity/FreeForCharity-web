"use client";

import { useEffect, useState } from "react";

type Testimonial = {
  author: string;
  quote: string;
};

type TestimonialsProps = {
  title?: string;
  items: Testimonial[];
  className?: string;
};

export default function Testimonials({
  title = "Voices of Gratitude",
  items,
  className,
}: TestimonialsProps) {
  const [active, setActive] = useState(0);

  const current = items[active] ?? items[0];

  // Auto-advance every 5 seconds
  useEffect(() => {
    if (!items || items.length <= 1) return;
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, 5000);
    return () => clearInterval(id);
  }, [items]);

  return (
    <section className={className}>
      <div className="ffc-container">
        <h2 className="font-[var(--font-faustina)] text-[48px] leading-[60px] text-center text-black">
          {title}
        </h2>
      </div>

      <div className="mt-6 bg-primary text-white">
        <div className="ffc-container py-10 grid gap-6 place-items-center">
          {/* Active testimonial */}
          {items.length > 0 && current && (
            <div className="max-w-[904px] text-center">
              <div className="font-[var(--font-fauna-one)] text-[28px] leading-[34px] mb-2">
                {current.author || "Name"}
              </div>
              {/* Stars */}
              <div className="mb-3 flex items-center justify-center gap-2" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-[29px] h-[29px]"
                    viewBox="0 0 24 24"
                    fill="#F5C045"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2l2.917 5.912L21.5 9.27l-4.25 4.144L18.834 21 12 17.77 5.166 21l1.584-7.586L2.5 9.27l6.583-1.358L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="font-[var(--font-fauna-one)] text-[21px] leading-[26px]">
                “{current.quote}”
              </p>
              {/* Dots */}
              <div className="mt-4 flex items-center justify-center gap-2">
                {items.map((_, i) => {
                  const isActive = i === active;
                  return (
                    <button
                      key={i}
                      type="button"
                      aria-label={`Show testimonial ${i + 1}`}
                      aria-current={isActive ? "true" : undefined}
                      onClick={() => setActive(i)}
                      className={
                        (isActive
                          ? "w-[22px] h-[22px] bg-[#D9D9D9]"
                          : "w-[15.23px] h-[15.23px] bg-white hover:bg-white/80") +
                        " inline-block rounded-full transition-colors"
                      }
                    />
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}



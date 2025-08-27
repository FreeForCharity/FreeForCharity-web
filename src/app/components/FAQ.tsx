type FaqItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  title?: string;
  items: FaqItem[];
  className?: string;
};

export default function FAQ({ title = "Frequently Asked Questions", items, className }: FAQProps) {
  return (
    <section className={className}>
      <div className="ffc-container py-12">
        <h2 className="font-[var(--font-faustina)] text-[48px] leading-[60px] text-center">
          {title}
        </h2>
        <div className="mt-8 space-y-4">
          {items.map((item, idx) => (
            <details key={idx} className="group border-b border-[#B7B7B7] pb-4">
              <summary className="list-none flex items-start justify-between gap-4 cursor-pointer">
                <span className="font-[var(--font-lato)] text-[32px] leading-[38px] text-black">
                  {item.question}
                </span>
                <span className="mt-0.5 shrink-0">
                  <svg
                    className="w-10 h-10 text-black transition-transform duration-200 group-open:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </summary>
              <div className="mt-3 font-[var(--font-lato)] text-[25px] leading-[30px] text-[#555555]">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}



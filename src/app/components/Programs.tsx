type ProgramFeature = {
  title: string;
  forYou?: string;
  forUs?: string;
};

type ProgramBlock = {
  heading: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  features: ProgramFeature[];
};

type ProgramsProps = {
  title?: string;
  domains: ProgramBlock;
  hosting: ProgramBlock;
  consulting: ProgramBlock;
  partners?: string[];
  className?: string;
};

export default function Programs({
  title = "Our Programs",
  domains,
  hosting,
  consulting,
  partners = [],
  className,
}: ProgramsProps) {
  return (
    <section className={className}>
      <div className="ffc-container py-12">
        <h2 className="font-[var(--font-faustina)] text-[48px] leading-[60px] text-center text-black">{title}</h2>

        {/* Domains */}
        <ProgramCard block={domains} />

        {/* Hosting */}
        <ProgramCard block={hosting} className="mt-10" />

        {/* Consulting */}
        <ProgramCard block={consulting} className="mt-10" />

        {partners.length > 0 && (
          <div className="mt-8 grid gap-4">
            {partners.map((p, i) => (
              <details key={i} className="group ffc-card border-[5px] border-accent rounded-[20px] p-0 overflow-hidden">
                <summary className="list-none cursor-pointer">
                  <div className="flex items-center justify-between px-5 py-4">
                    <div className="font-[var(--font-lato)] text-[36px] leading-[43px] text-black">{p}</div>
                    <svg className="w-6 h-6 text-black transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </summary>
                <div className="px-5 pb-5 font-[var(--font-lato)] text-[20px] leading-[26px] text-black/80">
                  {/* Optional partner description can go here. */}
                </div>
              </details>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ProgramCard({ block, className }: { block: ProgramBlock; className?: string }) {
  return (
    <div className={className}>
      <div className="text-center">
        <h3 className="font-[var(--font-lato)] text-[36px] leading-[43px] text-black">{block.heading}</h3>
        <p className="mt-3 font-[var(--font-lato)] text-[25px] leading-[30px] text-black max-w-4xl mx-auto">{block.description}</p>
        <div className="mt-5">
          <a href={block.ctaHref} className="inline-flex items-center justify-center rounded-[27px] bg-primary text-white px-8 py-4 text-[25px] leading-[30px] font-[var(--font-lato)]">
            {block.ctaLabel}
          </a>
        </div>
      </div>

      <div className="mt-6 grid gap-4">
        {block.features.map((f, idx) => (
          <details key={idx} className="group ffc-card border-[5px] border-accent rounded-[20px] p-0 overflow-hidden">
            <summary className="list-none cursor-pointer">
              <div className="flex items-center justify-between px-5 py-4">
                <div className="font-[var(--font-lato)] text-[36px] leading-[43px] text-black">{f.title}</div>
                <svg className="w-6 h-6 text-black transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </summary>
            {(f.forYou || f.forUs) && (
              <div className="px-5 pb-5 font-[var(--font-lato)] text-[25px] leading-[30px] text-black">
                {f.forYou && (
                  <div>
                    <span className="font-semibold">For You: </span>
                    <span>{f.forYou}</span>
                  </div>
                )}
                {f.forUs && (
                  <div className="mt-1">
                    <span className="font-semibold">For Us: </span>
                    <span>{f.forUs}</span>
                  </div>
                )}
              </div>
            )}
          </details>
        ))}
      </div>
    </div>
  );
}



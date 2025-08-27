type Feature = {
  title: string;
  body: string;
};

type EndowmentProps = {
  title?: string;
  features: Feature[];
  className?: string;
};

export default function EndowmentFeatures({
  title = "Free For Charity Endowment Features",
  features,
  className,
}: EndowmentProps) {
  return (
    <section className={className}>
      <div className="ffc-container py-12">
        <h2 className="font-[var(--font-faustina)] text-[48px] leading-[60px] text-center text-black">{title}</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {features.map((f, i) => (
            <article key={i} className={i % 2 === 0 ? "ffc-card border-[5px] border-primary rounded-[20px] p-6" : "ffc-card border-[5px] border-primary rounded-[20px] p-6 bg-[#F5F5F5]"}>
              <h3 className="font-[var(--font-lato)] text-[36px] leading-[43px] text-center text-black">{f.title}</h3>
              <p className="mt-3 font-[var(--font-lato)] text-[25px] leading-[30px] text-center text-black">{f.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}



type Stat = {
  value: number | string;
  label: string;
};

type ResultsProps = {
  title?: string;
  stats: Stat[];
  className?: string;
};

export default function Results({ title = "Our Impact", stats, className }: ResultsProps) {
  return (
    <section className={className}>
      <div className="ffc-container">
        <h2 className="font-[var(--font-faustina)] text-[48px] leading-[60px] text-center text-black">{title}</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, idx) => (
            <article key={idx} className="ffc-card border-accent border-[5px] rounded-[20px] p-6 text-center">
              <div className="font-[var(--font-faustina)] text-[64px] leading-[81px] text-black">{s.value}</div>
              <div className="mt-2 font-[var(--font-lato)] text-[25px] leading-[30px] text-black">{s.label}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


